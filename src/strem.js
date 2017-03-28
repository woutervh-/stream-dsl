import antlr4 from 'antlr4/index';
import {StremLexer} from '../gen/StremLexer';
import {StremParser} from '../gen/StremParser';
import {StremVisitor} from '../gen/StremVisitor';

function stream(producer) {
    const listeners = [];
    let completed = false;
    let errored = false;

    const next = (value) => {
        if (!completed && !errored) {
            for (const listener of listeners) {
                if (listener.next) {
                    listener.next(value);
                }
            }
        } else {
            throw new Error('Producer cannot call next after completion or error.');
        }
    };

    const complete = () => {
        if (!completed && !errored) {
            for (const listener of listeners) {
                if (listener.complete) {
                    listener.complete();
                }
            }
        } else {
            throw new Error('Producer cannot call complete after completion or error.');
        }
    };

    const error = (error) => {
        if (!completed && !errored) {
            for (const listener of listeners) {
                if (listener.error) {
                    listener.error(error);
                }
            }
        } else {
            throw new Error('Producer cannot call complete after completion or error.');
        }
    };

    const subscribe = () => {
        producer.start({next, complete, error});
    };

    const unsubscribe = () => {

    };

    return {
        subscribe: (listener) => {
            listeners.push(listener);
            if (listeners.length === 1) {
                subscribe();
            }
            return {
                unsubscribe: () => {
                    const index = listeners.indexOf(listener);
                    if (index >= 0) {
                        listeners.splice(index, 1);
                        if (listeners.length === 0) {
                            unsubscribe();
                        }
                    }
                }
            };
        }
    };
}

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
