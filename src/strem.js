import antlr4 from 'antlr4/index';
import {StremLexer} from '../gen/StremLexer';
import {StremParser} from '../gen/StremParser';
import {StremVisitor} from '../gen/StremVisitor';

class Visitor extends StremVisitor {
    visitProgram(context) {
        return this.visit(context.children[0]);
    }

    visitSequence(context) {
        const left = this.visit(context.left);
        const right = this.visit(context.right);
        return [...left, ...right];
    }

    visitValues(context) {
        return this.visit(context.expression());
    }

    visitNumberExpression(context) {
        return +context.getText();
    }
}

const input = "[1, 2] -> [3, 4]";

const chars = new antlr4.InputStream(input);
const lexer = new StremLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new StremParser(tokens);
const tree = parser.program();
const printer = new Visitor();
const result = printer.visitProgram(tree);

console.log(result);
