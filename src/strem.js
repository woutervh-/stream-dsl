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

const lastNumber = 5;
const lastNumberStream = create({
    start: (listener) => {
        setTimeout(() => {
            listener.next(lastNumber);
        }, 2000);
        setTimeout(() => {
            listener.complete();
        }, 4000);
    }
});
const whizard = magic`1, delay 1s 4, ${lastNumberStream} | 2, delay 0.5s 3`;

const subscription = whizard.subscribe({
    next: (value) => console.log(value),
    complete: () => {
        subscription.unsubscribe();
        console.log('Completed!');
    },
    error: (error) => console.error(error)
});
