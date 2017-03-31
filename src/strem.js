import antlr4 from 'antlr4/index';
import {StremLexer} from '../gen/StremLexer';
import {StremParser} from '../gen/StremParser';
import {StremVisitor} from '../gen/StremVisitor';
import create from './stream/create';
import sequence from './stream/sequence';
import parallel from './stream/parallel';
import delay from './stream/delay';
import fromValues from './stream/fromValues';

class Visitor extends StremVisitor {
    constructor(context) {
        super();
        this.context = context;
    }

    visitProgram(context) {
        return this.visit(context.children[0]);
    }

    visitSequence(context) {
        const left = this.visit(context.left);
        const right = this.visit(context.right);
        return sequence(left, right);
    }

    visitValues(context) {
        const values = this.visit(context.expression());
        return values.reduce((left, right) => {
            return sequence(left, right);
        });
    }

    visitSingleSource(context) {
        return this.visit(context.expression());
    }

    visitSubSource(context) {
        return this.visit(context.source());
    }

    visitNumberExpression(context) {
        return fromValues([+context.getText()]);
    }

    visitParallel(context) {
        const left = this.visit(context.left);
        const right = this.visit(context.right);
        return parallel(left, right);
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
        const source = this.visit(context.source());
        return delay(amount, source);
    }

    visitNamedSource(context) {
        return this.context[context.getText()];
    }

    visitChain(context) {
        const left = this.visit(context.left);
        const sourceFactory = this.visit(context.sourceFactory());
        return sourceFactory(left);
    }

    visitNamedSourceFactory(context) {
        return this.context[context.getText()];
    }
}

function magic(input, ...streams) {
    const context = {};
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (i > 0) {
            const key = '__internal_' + (i - 1);
            result += key;
            context[key] = (streams[i - 1]);
        }
        result += input[i];
    }

    const chars = new antlr4.InputStream(result);
    const lexer = new StremLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new StremParser(tokens);
    const tree = parser.program();
    const printer = new Visitor(context);
    return printer.visitProgram(tree);
}

const multiplier = (factor) => (source) => {
    let subscription;

    return create({
        start: (listener) => {
            subscription = source.subscribe({
                next: (value) => {
                    listener.next(value * factor);
                },
                complete: () => listener.complete(),
                error: (error) => listener.error(error)
            });
        },
        stop: () => subscription.unsubscribe()
    });
};
const whizard = magic`1 | 1, delay 1s 2.5 -> ${multiplier(2)} | 3, delay 0.5s 4`;

const subscription = whizard.subscribe({
    next: (value) => console.log(value),
    complete: () => {
        subscription.unsubscribe();
        console.log('Completed!');
    },
    error: (error) => console.error(error)
});
