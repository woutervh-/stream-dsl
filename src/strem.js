import antlr4 from 'antlr4/index';
import {StremLexer} from '../gen/StremLexer';
import {StremParser} from '../gen/StremParser';
import {StremVisitor} from '../gen/StremVisitor';
import sequence from './stream/sequence';
import parallel from './stream/parallel';
import delay from './stream/delay';
import fromValues from './stream/fromValues';

class Visitor extends StremVisitor {
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
}

const input = "1, delay 1s 4, 5 | 2, delay 0.5s 3";

const chars = new antlr4.InputStream(input);
const lexer = new StremLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new StremParser(tokens);
const tree = parser.program();
const printer = new Visitor();
const result = printer.visitProgram(tree);

const subscription = result.subscribe({
    next: (value) => console.log(value),
    complete: () => {
        subscription.unsubscribe();
        console.log('Completed!');
    },
    error: (error) => console.error(error)
});
