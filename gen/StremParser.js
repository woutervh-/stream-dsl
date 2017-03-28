// Generated from C:/Users/vanheewo/workspace/stream-dsl/src\Strem.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StremVisitor = require('./StremVisitor').StremVisitor;

var grammarFileName = "Strem.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0015T\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0005\u0002\r\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018\n\u0003\f\u0003",
    "\u000e\u0003\u001b\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003&\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003+\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u00033\n\u0003\f\u0003\u000e\u00036\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004?\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004M\n\u0004\f\u0004\u000e\u0004P\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0004\u0004\u0006\u0006\u0002",
    "\u0004\u0006\b\u0002\u0002]\u0002\f\u0003\u0002\u0002\u0002\u0004*\u0003",
    "\u0002\u0002\u0002\u0006>\u0003\u0002\u0002\u0002\bQ\u0003\u0002\u0002",
    "\u0002\n\r\u0005\u0006\u0004\u0002\u000b\r\u0005\u0004\u0003\u0002\f",
    "\n\u0003\u0002\u0002\u0002\f\u000b\u0003\u0002\u0002\u0002\r\u0003\u0003",
    "\u0002\u0002\u0002\u000e\u000f\b\u0003\u0001\u0002\u000f\u0010\u0007",
    "\u0003\u0002\u0002\u0010\u0011\u0005\u0004\u0003\u0002\u0011\u0012\u0007",
    "\u0004\u0002\u0002\u0012+\u0003\u0002\u0002\u0002\u0013\u0014\u0007",
    "\u0005\u0002\u0002\u0014\u0019\u0005\u0006\u0004\u0002\u0015\u0016\u0007",
    "\u0006\u0002\u0002\u0016\u0018\u0005\u0006\u0004\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d\u0007",
    "\u0007\u0002\u0002\u001d+\u0003\u0002\u0002\u0002\u001e\u001f\u0007",
    "\b\u0002\u0002\u001f \u0007\n\u0002\u0002 !\u0005\u0006\u0004\u0002",
    "!\"\u0007\u000b\u0002\u0002\"%\u0005\b\u0005\u0002#$\u0007\f\u0002\u0002",
    "$&\u0005\u0006\u0004\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\'(\u0007\r\u0002\u0002(+\u0003\u0002",
    "\u0002\u0002)+\u0005\b\u0005\u0002*\u000e\u0003\u0002\u0002\u0002*\u0013",
    "\u0003\u0002\u0002\u0002*\u001e\u0003\u0002\u0002\u0002*)\u0003\u0002",
    "\u0002\u0002+4\u0003\u0002\u0002\u0002,-\f\u0006\u0002\u0002-.\u0007",
    "\b\u0002\u0002.3\u0005\u0004\u0003\u0007/0\f\u0005\u0002\u000201\u0007",
    "\t\u0002\u000213\u0005\u0004\u0003\u00062,\u0003\u0002\u0002\u00022",
    "/\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u00025\u0005\u0003\u0002\u0002\u000264\u0003",
    "\u0002\u0002\u000278\b\u0004\u0001\u000289\u0007\u0003\u0002\u00029",
    ":\u0005\u0006\u0004\u0002:;\u0007\u0004\u0002\u0002;?\u0003\u0002\u0002",
    "\u0002<?\u0007\u0014\u0002\u0002=?\u0005\b\u0005\u0002>7\u0003\u0002",
    "\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?N\u0003",
    "\u0002\u0002\u0002@A\f\u0007\u0002\u0002AB\u0007\u000e\u0002\u0002B",
    "M\u0005\u0006\u0004\bCD\f\u0006\u0002\u0002DE\u0007\u000f\u0002\u0002",
    "EM\u0005\u0006\u0004\u0007FG\f\u0005\u0002\u0002GH\u0007\u0010\u0002",
    "\u0002HM\u0005\u0006\u0004\u0006IJ\f\u0004\u0002\u0002JK\u0007\u0011",
    "\u0002\u0002KM\u0005\u0006\u0004\u0005L@\u0003\u0002\u0002\u0002LC\u0003",
    "\u0002\u0002\u0002LF\u0003\u0002\u0002\u0002LI\u0003\u0002\u0002\u0002",
    "MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002O\u0007\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0007",
    "\u0012\u0002\u0002R\t\u0003\u0002\u0002\u0002\u000b\f\u0019%*24>LN"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'['", "','", "']'", "'->'", "'|'", 
                     "'{'", "'for'", "'where'", "'}'", "'*'", "'/'", "'+'", 
                     "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "ID", "STRING", 
                      "NUMBER", "WS" ];

var ruleNames =  [ "program", "source", "expression", "name" ];

function StremParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StremParser.prototype = Object.create(antlr4.Parser.prototype);
StremParser.prototype.constructor = StremParser;

Object.defineProperty(StremParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StremParser.EOF = antlr4.Token.EOF;
StremParser.T__0 = 1;
StremParser.T__1 = 2;
StremParser.T__2 = 3;
StremParser.T__3 = 4;
StremParser.T__4 = 5;
StremParser.T__5 = 6;
StremParser.T__6 = 7;
StremParser.T__7 = 8;
StremParser.T__8 = 9;
StremParser.T__9 = 10;
StremParser.T__10 = 11;
StremParser.T__11 = 12;
StremParser.T__12 = 13;
StremParser.T__13 = 14;
StremParser.T__14 = 15;
StremParser.ID = 16;
StremParser.STRING = 17;
StremParser.NUMBER = 18;
StremParser.WS = 19;

StremParser.RULE_program = 0;
StremParser.RULE_source = 1;
StremParser.RULE_expression = 2;
StremParser.RULE_name = 3;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StremParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ProgramContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StremParser.ProgramContext = ProgramContext;

StremParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StremParser.RULE_program);
    try {
        this.state = 10;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 8;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 9;
            this.source(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StremParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;


 
SourceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function SequenceContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    this.right = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SequenceContext.prototype = Object.create(SourceContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

StremParser.SequenceContext = SequenceContext;

SequenceContext.prototype.source = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceContext);
    } else {
        return this.getTypedRuleContext(SourceContext,i);
    }
};
SequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NamedSourceContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NamedSourceContext.prototype = Object.create(SourceContext.prototype);
NamedSourceContext.prototype.constructor = NamedSourceContext;

StremParser.NamedSourceContext = NamedSourceContext;

NamedSourceContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
NamedSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitNamedSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubSourceContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubSourceContext.prototype = Object.create(SourceContext.prototype);
SubSourceContext.prototype.constructor = SubSourceContext;

StremParser.SubSourceContext = SubSourceContext;

SubSourceContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};
SubSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSubSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParallelContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    this.right = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParallelContext.prototype = Object.create(SourceContext.prototype);
ParallelContext.prototype.constructor = ParallelContext;

StremParser.ParallelContext = ParallelContext;

ParallelContext.prototype.source = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceContext);
    } else {
        return this.getTypedRuleContext(SourceContext,i);
    }
};
ParallelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitParallel(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SequenceContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    this.right = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SequenceContext.prototype = Object.create(SourceContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

StremParser.SequenceContext = SequenceContext;

SequenceContext.prototype.source = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceContext);
    } else {
        return this.getTypedRuleContext(SourceContext,i);
    }
};
SequenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSequence(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function NamedSourceContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NamedSourceContext.prototype = Object.create(SourceContext.prototype);
NamedSourceContext.prototype.constructor = NamedSourceContext;

StremParser.NamedSourceContext = NamedSourceContext;

NamedSourceContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
NamedSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitNamedSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function SubSourceContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubSourceContext.prototype = Object.create(SourceContext.prototype);
SubSourceContext.prototype.constructor = SubSourceContext;

StremParser.SubSourceContext = SubSourceContext;

SubSourceContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};
SubSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSubSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function ParallelContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    this.right = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParallelContext.prototype = Object.create(SourceContext.prototype);
ParallelContext.prototype.constructor = ParallelContext;

StremParser.ParallelContext = ParallelContext;

ParallelContext.prototype.source = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceContext);
    } else {
        return this.getTypedRuleContext(SourceContext,i);
    }
};
ParallelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitParallel(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function ValuesContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValuesContext.prototype = Object.create(SourceContext.prototype);
ValuesContext.prototype.constructor = ValuesContext;

StremParser.ValuesContext = ValuesContext;

ValuesContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function ComprehensionContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComprehensionContext.prototype = Object.create(SourceContext.prototype);
ComprehensionContext.prototype.constructor = ComprehensionContext;

StremParser.ComprehensionContext = ComprehensionContext;

ComprehensionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ComprehensionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
ComprehensionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitComprehension(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComprehensionContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComprehensionContext.prototype = Object.create(SourceContext.prototype);
ComprehensionContext.prototype.constructor = ComprehensionContext;

StremParser.ComprehensionContext = ComprehensionContext;

ComprehensionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ComprehensionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
ComprehensionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitComprehension(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StremParser.prototype.source = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SourceContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, StremParser.RULE_source, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StremParser.T__0:
            localctx = new SubSourceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 13;
            this.match(StremParser.T__0);
            this.state = 14;
            this.source(0);
            this.state = 15;
            this.match(StremParser.T__1);
            break;
        case StremParser.T__2:
            localctx = new ValuesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 17;
            this.match(StremParser.T__2);
            this.state = 18;
            this.expression(0);
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===StremParser.T__3) {
                this.state = 19;
                this.match(StremParser.T__3);
                this.state = 20;
                this.expression(0);
                this.state = 25;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 26;
            this.match(StremParser.T__4);
            break;
        case StremParser.T__5:
            localctx = new ComprehensionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 28;
            this.match(StremParser.T__5);
            this.state = 29;
            this.match(StremParser.T__7);
            this.state = 30;
            this.expression(0);
            this.state = 31;
            this.match(StremParser.T__8);
            this.state = 32;
            this.name();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StremParser.T__9) {
                this.state = 33;
                this.match(StremParser.T__9);
                this.state = 34;
                this.expression(0);
            }

            this.state = 37;
            this.match(StremParser.T__10);
            break;
        case StremParser.ID:
            localctx = new NamedSourceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 39;
            this.name();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 50;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 48;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SequenceContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 42;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 43;
                    this.match(StremParser.T__5);
                    this.state = 44;
                    localctx.right = this.source(5);
                    break;

                case 2:
                    localctx = new ParallelContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 45;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 46;
                    this.match(StremParser.T__6);
                    this.state = 47;
                    localctx.right = this.source(4);
                    break;

                } 
            }
            this.state = 52;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StremParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AddContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddContext.prototype = Object.create(ExpressionContext.prototype);
AddContext.prototype.constructor = AddContext;

StremParser.AddContext = AddContext;

AddContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NamedExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NamedExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NamedExpressionContext.prototype.constructor = NamedExpressionContext;

StremParser.NamedExpressionContext = NamedExpressionContext;

NamedExpressionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
NamedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitNamedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

StremParser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.NUMBER = function() {
    return this.getToken(StremParser.NUMBER, 0);
};
NumberExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitNumberExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubtractContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubtractContext.prototype = Object.create(ExpressionContext.prototype);
SubtractContext.prototype.constructor = SubtractContext;

StremParser.SubtractContext = SubtractContext;

SubtractContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
SubtractContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSubtract(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivideContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivideContext.prototype = Object.create(ExpressionContext.prototype);
DivideContext.prototype.constructor = DivideContext;

StremParser.DivideContext = DivideContext;

DivideContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
DivideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitDivide(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyContext.prototype = Object.create(ExpressionContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

StremParser.MultiplyContext = MultiplyContext;

MultiplyContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitMultiply(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubExpressionContext.prototype = Object.create(ExpressionContext.prototype);
SubExpressionContext.prototype.constructor = SubExpressionContext;

StremParser.SubExpressionContext = SubExpressionContext;

SubExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SubExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSubExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StremParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, StremParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StremParser.T__0:
            localctx = new SubExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 54;
            this.match(StremParser.T__0);
            this.state = 55;
            this.expression(0);
            this.state = 56;
            this.match(StremParser.T__1);
            break;
        case StremParser.NUMBER:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 58;
            this.match(StremParser.NUMBER);
            break;
        case StremParser.ID:
            localctx = new NamedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 59;
            this.name();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 76;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 74;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 62;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 63;
                    this.match(StremParser.T__11);
                    this.state = 64;
                    localctx.right = this.expression(6);
                    break;

                case 2:
                    localctx = new DivideContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 65;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 66;
                    this.match(StremParser.T__12);
                    this.state = 67;
                    localctx.right = this.expression(5);
                    break;

                case 3:
                    localctx = new AddContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 68;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 69;
                    this.match(StremParser.T__13);
                    this.state = 70;
                    localctx.right = this.expression(4);
                    break;

                case 4:
                    localctx = new SubtractContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 71;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 72;
                    this.match(StremParser.T__14);
                    this.state = 73;
                    localctx.right = this.expression(3);
                    break;

                } 
            }
            this.state = 78;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StremParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.ID = function() {
    return this.getToken(StremParser.ID, 0);
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




StremParser.NameContext = NameContext;

StremParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StremParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(StremParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


StremParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.source_sempred(localctx, predIndex);
	case 2:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

StremParser.prototype.source_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

StremParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.StremParser = StremParser;
