// Generated from C:/Users/vanheewo/workspace/stream-dsl/src\Strem.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StremVisitor = require('./StremVisitor').StremVisitor;

var grammarFileName = "Strem.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0018X\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003\u001c\n\u0003\f\u0003\u000e\u0003\u001f\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003%",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00030\n\u0003",
    "\f\u0003\u000e\u00033\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004:\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "C\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005Q\n\u0005\f\u0005\u000e\u0005T\u000b\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0002\u0004\u0004\b\u0007\u0002\u0004",
    "\u0006\b\n\u0002\u0003\u0003\u0002\u0006\tb\u0002\f\u0003\u0002\u0002",
    "\u0002\u0004$\u0003\u0002\u0002\u0002\u00069\u0003\u0002\u0002\u0002",
    "\bB\u0003\u0002\u0002\u0002\nU\u0003\u0002\u0002\u0002\f\r\u0005\u0004",
    "\u0003\u0002\r\u0003\u0003\u0002\u0002\u0002\u000e\u000f\b\u0003\u0001",
    "\u0002\u000f\u0010\u0007\u0003\u0002\u0002\u0010\u0011\u0005\u0004\u0003",
    "\u0002\u0011\u0012\u0007\u0004\u0002\u0002\u0012%\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0007\u0005\u0002\u0002\u0014\u0015\u0007\u0017\u0002",
    "\u0002\u0015\u0016\t\u0002\u0002\u0002\u0016%\u0005\u0004\u0003\t\u0017",
    "\u0018\u0007\n\u0002\u0002\u0018\u001d\u0005\b\u0005\u0002\u0019\u001a",
    "\u0007\u000b\u0002\u0002\u001a\u001c\u0005\b\u0005\u0002\u001b\u0019",
    "\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b",
    "\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e ",
    "\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 !\u0007",
    "\f\u0002\u0002!%\u0003\u0002\u0002\u0002\"%\u0005\n\u0006\u0002#%\u0005",
    "\b\u0005\u0002$\u000e\u0003\u0002\u0002\u0002$\u0013\u0003\u0002\u0002",
    "\u0002$\u0017\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$#\u0003",
    "\u0002\u0002\u0002%1\u0003\u0002\u0002\u0002&\'\f\u0007\u0002\u0002",
    "\'(\u0007\u000b\u0002\u0002(0\u0005\u0004\u0003\b)*\f\u0005\u0002\u0002",
    "*+\u0007\u000e\u0002\u0002+0\u0005\u0004\u0003\u0006,-\f\u0006\u0002",
    "\u0002-.\u0007\r\u0002\u0002.0\u0005\u0006\u0004\u0002/&\u0003\u0002",
    "\u0002\u0002/)\u0003\u0002\u0002\u0002/,\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "2\u0005\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u00024:\u0005\n",
    "\u0006\u000256\u0007\u000f\u0002\u00026:\u0005\n\u0006\u000278\u0007",
    "\u0010\u0002\u00028:\u0005\n\u0006\u000294\u0003\u0002\u0002\u00029",
    "5\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:\u0007\u0003\u0002",
    "\u0002\u0002;<\b\u0005\u0001\u0002<=\u0007\u0003\u0002\u0002=>\u0005",
    "\b\u0005\u0002>?\u0007\u0004\u0002\u0002?C\u0003\u0002\u0002\u0002@",
    "C\u0007\u0017\u0002\u0002AC\u0005\n\u0006\u0002B;\u0003\u0002\u0002",
    "\u0002B@\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002CR\u0003\u0002",
    "\u0002\u0002DE\f\u0007\u0002\u0002EF\u0007\u0011\u0002\u0002FQ\u0005",
    "\b\u0005\bGH\f\u0006\u0002\u0002HI\u0007\u0012\u0002\u0002IQ\u0005\b",
    "\u0005\u0007JK\f\u0005\u0002\u0002KL\u0007\u0013\u0002\u0002LQ\u0005",
    "\b\u0005\u0006MN\f\u0004\u0002\u0002NO\u0007\u0014\u0002\u0002OQ\u0005",
    "\b\u0005\u0005PD\u0003\u0002\u0002\u0002PG\u0003\u0002\u0002\u0002P",
    "J\u0003\u0002\u0002\u0002PM\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002",
    "\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002S\t\u0003",
    "\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UV\u0007\u0015\u0002\u0002",
    "V\u000b\u0003\u0002\u0002\u0002\n\u001d$/19BPR"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'delay'", "'ms'", "'s'", "'min'", 
                     "'h'", "'['", "','", "']'", "'->'", "'|'", "'map'", 
                     "'filter'", "'*'", "'/'", "'+'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "ID", "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "program", "source", "sourceFactory", "expression", "name" ];

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
StremParser.T__15 = 16;
StremParser.T__16 = 17;
StremParser.T__17 = 18;
StremParser.ID = 19;
StremParser.STRING = 20;
StremParser.NUMBER = 21;
StremParser.WS = 22;

StremParser.RULE_program = 0;
StremParser.RULE_source = 1;
StremParser.RULE_sourceFactory = 2;
StremParser.RULE_expression = 3;
StremParser.RULE_name = 4;

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
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.source(0);
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


function ChainContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ChainContext.prototype = Object.create(SourceContext.prototype);
ChainContext.prototype.constructor = ChainContext;

StremParser.ChainContext = ChainContext;

ChainContext.prototype.sourceFactory = function() {
    return this.getTypedRuleContext(SourceFactoryContext,0);
};

ChainContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};
ChainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitChain(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DelayContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.amount = null; // Token;
    this.unit = null; // Token;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DelayContext.prototype = Object.create(SourceContext.prototype);
DelayContext.prototype.constructor = DelayContext;

StremParser.DelayContext = DelayContext;

DelayContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

DelayContext.prototype.NUMBER = function() {
    return this.getToken(StremParser.NUMBER, 0);
};
DelayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitDelay(this);
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

function ChainContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ChainContext.prototype = Object.create(SourceContext.prototype);
ChainContext.prototype.constructor = ChainContext;

StremParser.ChainContext = ChainContext;

ChainContext.prototype.sourceFactory = function() {
    return this.getTypedRuleContext(SourceFactoryContext,0);
};

ChainContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};
ChainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitChain(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function DelayContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.amount = null; // Token;
    this.unit = null; // Token;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DelayContext.prototype = Object.create(SourceContext.prototype);
DelayContext.prototype.constructor = DelayContext;

StremParser.DelayContext = DelayContext;

DelayContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

DelayContext.prototype.NUMBER = function() {
    return this.getToken(StremParser.NUMBER, 0);
};
DelayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitDelay(this);
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

function SingleSourceContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleSourceContext.prototype = Object.create(SourceContext.prototype);
SingleSourceContext.prototype.constructor = SingleSourceContext;

StremParser.SingleSourceContext = SingleSourceContext;

SingleSourceContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SingleSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSingleSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SingleSourceContext(parser, ctx) {
	SourceContext.call(this, parser);
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleSourceContext.prototype = Object.create(SourceContext.prototype);
SingleSourceContext.prototype.constructor = SingleSourceContext;

StremParser.SingleSourceContext = SingleSourceContext;

SingleSourceContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SingleSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitSingleSource(this);
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
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
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

        case 2:
            localctx = new DelayContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 17;
            this.match(StremParser.T__2);
            this.state = 18;
            localctx.amount = this.match(StremParser.NUMBER);
            this.state = 19;
            localctx.unit = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StremParser.T__3) | (1 << StremParser.T__4) | (1 << StremParser.T__5) | (1 << StremParser.T__6))) !== 0))) {
                localctx.unit = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 20;
            this.source(7);
            break;

        case 3:
            localctx = new ValuesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 21;
            this.match(StremParser.T__7);
            this.state = 22;
            this.expression(0);
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===StremParser.T__8) {
                this.state = 23;
                this.match(StremParser.T__8);
                this.state = 24;
                this.expression(0);
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 30;
            this.match(StremParser.T__9);
            break;

        case 4:
            localctx = new NamedSourceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 32;
            this.name();
            break;

        case 5:
            localctx = new SingleSourceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 33;
            this.expression(0);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 47;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 45;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new SequenceContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 36;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 37;
                    this.match(StremParser.T__8);
                    this.state = 38;
                    localctx.right = this.source(6);
                    break;

                case 2:
                    localctx = new ParallelContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 39;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 40;
                    this.match(StremParser.T__11);
                    this.state = 41;
                    localctx.right = this.source(4);
                    break;

                case 3:
                    localctx = new ChainContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 42;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 43;
                    this.match(StremParser.T__10);
                    this.state = 44;
                    this.sourceFactory();
                    break;

                } 
            }
            this.state = 49;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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

function SourceFactoryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StremParser.RULE_sourceFactory;
    return this;
}

SourceFactoryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceFactoryContext.prototype.constructor = SourceFactoryContext;


 
SourceFactoryContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FilterContext(parser, ctx) {
	SourceFactoryContext.call(this, parser);
    SourceFactoryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FilterContext.prototype = Object.create(SourceFactoryContext.prototype);
FilterContext.prototype.constructor = FilterContext;

StremParser.FilterContext = FilterContext;

FilterContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
FilterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitFilter(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MapContext(parser, ctx) {
	SourceFactoryContext.call(this, parser);
    SourceFactoryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MapContext.prototype = Object.create(SourceFactoryContext.prototype);
MapContext.prototype.constructor = MapContext;

StremParser.MapContext = MapContext;

MapContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
MapContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitMap(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NamedSourceFactoryContext(parser, ctx) {
	SourceFactoryContext.call(this, parser);
    SourceFactoryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NamedSourceFactoryContext.prototype = Object.create(SourceFactoryContext.prototype);
NamedSourceFactoryContext.prototype.constructor = NamedSourceFactoryContext;

StremParser.NamedSourceFactoryContext = NamedSourceFactoryContext;

NamedSourceFactoryContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};
NamedSourceFactoryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitNamedSourceFactory(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StremParser.SourceFactoryContext = SourceFactoryContext;

StremParser.prototype.sourceFactory = function() {

    var localctx = new SourceFactoryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StremParser.RULE_sourceFactory);
    try {
        this.state = 55;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StremParser.ID:
            localctx = new NamedSourceFactoryContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.name();
            break;
        case StremParser.T__12:
            localctx = new MapContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(StremParser.T__12);
            this.state = 52;
            this.name();
            break;
        case StremParser.T__13:
            localctx = new FilterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 53;
            this.match(StremParser.T__13);
            this.state = 54;
            this.name();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, StremParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StremParser.T__0:
            localctx = new SubExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 58;
            this.match(StremParser.T__0);
            this.state = 59;
            this.expression(0);
            this.state = 60;
            this.match(StremParser.T__1);
            break;
        case StremParser.NUMBER:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 62;
            this.match(StremParser.NUMBER);
            break;
        case StremParser.ID:
            localctx = new NamedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 63;
            this.name();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 80;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 78;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 66;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 67;
                    this.match(StremParser.T__14);
                    this.state = 68;
                    localctx.right = this.expression(6);
                    break;

                case 2:
                    localctx = new DivideContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 69;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 70;
                    this.match(StremParser.T__15);
                    this.state = 71;
                    localctx.right = this.expression(5);
                    break;

                case 3:
                    localctx = new AddContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 72;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 73;
                    this.match(StremParser.T__16);
                    this.state = 74;
                    localctx.right = this.expression(4);
                    break;

                case 4:
                    localctx = new SubtractContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 75;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 76;
                    this.match(StremParser.T__17);
                    this.state = 77;
                    localctx.right = this.expression(3);
                    break;

                } 
            }
            this.state = 82;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
    this.enterRule(localctx, 8, StremParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
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
	case 3:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

StremParser.prototype.source_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

StremParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.StremParser = StremParser;
