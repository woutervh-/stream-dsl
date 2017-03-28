import antlr4 from 'antlr4/index';
import {JSONLexer} from '../gen/JSONLexer';
import {JSONParser} from '../gen/JSONParser';
import {JSONVisitor} from '../gen/JSONVisitor';

class Visitor extends JSONVisitor {
    visitJson(context) {
        return this.visit(context.value());
    }

    visitValue(context) {
        return this.visit(context.children[0]);
    }

    visitBool(context) {
        if (context.getText() === 'true') {
            return true;
        } else if (context.getText() === 'false') {
            return false;
        } else {
            throw new Error('Not a boolean value: ' + context.getText());
        }
    }

    visitStr(context) {
        return JSON.parse(context.getText());
    }

    visitNul() {
        return null;
    }

    visitNum(context) {
        return +context.getText();
    }

    visitPair(context) {
        const key = JSON.parse(context.left.text);
        const value = this.visit(context.right);
        return {key, value};
    }

    visitObj(context) {
        const result = {};
        for (const pair of this.visit(context.pair())) {
            result[pair.key] = pair.value;
        }
        return result;
    }

    visitArray(context) {
        return this.visit(context.value());
    }
}

const input = JSON.stringify({foo: 'bar', baz: [1, true]});

const chars = new antlr4.InputStream(input);
const lexer = new JSONLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new JSONParser(tokens);
const tree = parser.json();
const printer = new Visitor();
const result = printer.visitJson(tree);

console.log(result);
