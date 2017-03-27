import antlr4 from 'antlr4/index';
import {JSONLexer} from '../gen/JSONLexer';
import {JSONParser} from '../gen/JSONParser';
import {JSONVisitor} from '../gen/JSONVisitor';

const input = JSON.stringify({foo: 'bar', baz: [1, true]});
const chars = new antlr4.InputStream(input);
const lexer = new JSONLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new JSONParser(tokens);
parser.buildParseTrees = true;
const tree = parser.json();

function Visitor() {
    JSONVisitor.call(this);
    return this;
}

// inherit default listener
Visitor.prototype = Object.create(JSONVisitor.prototype);
Visitor.prototype.constructor = Visitor;

const printer = new Visitor();
printer.visitJson(tree);
