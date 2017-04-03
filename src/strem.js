import antlr4 from 'antlr4/index';
import {StremLexer} from '../gen/StremLexer';
import {StremParser} from '../gen/StremParser';
import {StremVisitor} from '../gen/StremVisitor';
import create from './stream/create';
import follow from './stream/generators/follow';
import merge from './stream/generators/merge';
import each from './stream/operators/each';
import from from './stream/generators/from';
import of from './stream/generators/of';
import map from './stream/operators/map';
import filter from './stream/operators/filter';
import delay from './stream/operators/delay';

class Visitor extends StremVisitor {
    constructor(context) {
        super();
        this.context = context;
    }

    visitFollow(context) {
        const left = this.visit(context.left);
        const right = this.visit(context.right);
        return follow(left, right);
    }

    visitSingleSource(context) {
        return this.visit(context.expression());
    }

    visitSubSource(context) {
        return this.visit(context.source());
    }

    visitNumberExpression(context) {
        return of(+context.getText());
    }

    visitStringExpression(context) {
        return of(JSON.parse(context.getText()));
    }

    visitBooleanExpression(context) {
        if (context.getText() === 'true') {
            return of(true);
        } else if (context.getText() === 'false') {
            return of(false);
        } else {
            throw new Error('Boolean expression must be true or false');
        }
    }

    visitMerge(context) {
        const left = this.visit(context.left);
        const right = this.visit(context.right);
        return merge(left, right);
    }

    visitDelay(context) {
        let amount = +context.amount.text;
        const unit = context.unit.text;
        switch (unit) {
            case 'h':
                amount *= 60;
            case 'min':
                amount *= 60;
            case 's':
                amount *= 1e3;
            case 'ms':
                break;
        }
        return delay(amount);
    }

    visitNamedSource(context) {
        return this.visit(context.name());
    }

    visitNamedSourceFactory(context) {
        return this.visit(context.name());
    }

    visitNamedExpression(context) {
        return this.visit(context.name());
    }

    visitCompose(context) {
        const source = this.visit(context.left);
        const sourceFactory = this.visit(context.sourceFactory());
        return sourceFactory(source);
    }

    visitMap(context) {
        return map(this.visit(context.name()));
    }

    visitFilter(context) {
        return filter(this.visit(context.name()));
    }

    visitName(context) {
        return this.context[context.getText()];
    }

    visitEach(context) {
        const sourceFactory = this.visit(context.name());
        return each(sourceFactory);
    }
}

export default function strem(input, ...streams) {
    const context = {};
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (i > 0) {
            const key = '__internal_strem_context_' + (i - 1);
            result += key;
            context[key] = (streams[i - 1]);
        }
        result += input[i];
    }

    const chars = new antlr4.InputStream(result);
    const lexer = new StremLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new StremParser(tokens);
    const tree = parser.source();
    const visitor = new Visitor(context);
    return visitor.visit(tree);
}
