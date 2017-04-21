// Generated from C:/Users/vanheewo/workspace/stream-dsl/src\Strem.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StremVisitor = require('./StremVisitor').StremVisitor;

var grammarFileName = "Strem.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001bG\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0012\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u001d\n\u0002\f\u0002",
    "\u000e\u0002 \u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003-\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u00048\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004@\n\u0004\f\u0004\u000e\u0004",
    "C\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0004\u0002",
    "\u0006\u0006\u0002\u0004\u0006\b\u0002\u0005\u0003\u0002\u000b\u000e",
    "\u0003\u0002\u0012\u0014\u0003\u0002\u0015\u0016Q\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0004,\u0003\u0002\u0002\u0002\u00067\u0003\u0002",
    "\u0002\u0002\bD\u0003\u0002\u0002\u0002\n\u000b\b\u0002\u0001\u0002",
    "\u000b\f\u0007\u0003\u0002\u0002\f\r\u0005\u0002\u0002\u0002\r\u000e",
    "\u0007\u0004\u0002\u0002\u000e\u0012\u0003\u0002\u0002\u0002\u000f\u0012",
    "\u0005\u0006\u0004\u0002\u0010\u0012\u0005\b\u0005\u0002\u0011\n\u0003",
    "\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0010\u0003",
    "\u0002\u0002\u0002\u0012\u001e\u0003\u0002\u0002\u0002\u0013\u0014\f",
    "\u0007\u0002\u0002\u0014\u0015\u0007\u0005\u0002\u0002\u0015\u001d\u0005",
    "\u0002\u0002\b\u0016\u0017\f\u0006\u0002\u0002\u0017\u0018\u0007\u0006",
    "\u0002\u0002\u0018\u001d\u0005\u0002\u0002\u0007\u0019\u001a\f\u0005",
    "\u0002\u0002\u001a\u001b\u0007\u0007\u0002\u0002\u001b\u001d\u0005\u0004",
    "\u0003\u0002\u001c\u0013\u0003\u0002\u0002\u0002\u001c\u0016\u0003\u0002",
    "\u0002\u0002\u001c\u0019\u0003\u0002\u0002\u0002\u001d \u0003\u0002",
    "\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f\u0003\u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002!-\u0005\b\u0005\u0002\"#\u0007\b\u0002\u0002#-\u0005\b",
    "\u0005\u0002$%\u0007\t\u0002\u0002%-\u0005\b\u0005\u0002&\'\u0007\n",
    "\u0002\u0002\'(\u0007\u001a\u0002\u0002(-\t\u0002\u0002\u0002)*\u0007",
    "\u000f\u0002\u0002*+\u0007\u0010\u0002\u0002+-\u0007\u0011\u0002\u0002",
    ",!\u0003\u0002\u0002\u0002,\"\u0003\u0002\u0002\u0002,$\u0003\u0002",
    "\u0002\u0002,&\u0003\u0002\u0002\u0002,)\u0003\u0002\u0002\u0002-\u0005",
    "\u0003\u0002\u0002\u0002./\b\u0004\u0001\u0002/0\u0007\u0003\u0002\u0002",
    "01\u0005\u0006\u0004\u000212\u0007\u0004\u0002\u000228\u0003\u0002\u0002",
    "\u000238\u0007\u001a\u0002\u000248\u0007\u0019\u0002\u000258\u0007\u0017",
    "\u0002\u000268\u0005\b\u0005\u00027.\u0003\u0002\u0002\u000273\u0003",
    "\u0002\u0002\u000274\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u0002",
    "76\u0003\u0002\u0002\u00028A\u0003\u0002\u0002\u00029:\f\u0005\u0002",
    "\u0002:;\t\u0003\u0002\u0002;@\u0005\u0006\u0004\u0006<=\f\u0004\u0002",
    "\u0002=>\t\u0004\u0002\u0002>@\u0005\u0006\u0004\u0005?9\u0003\u0002",
    "\u0002\u0002?<\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003",
    "\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B\u0007\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002DE\u0007\u0018\u0002\u0002E\t\u0003",
    "\u0002\u0002\u0002\t\u0011\u001c\u001e,7?A"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "','", "'|'", "'->'", "'map'", 
                     "'filter'", "'delay'", "'ms'", "'s'", "'min'", "'h'", 
                     "'{'", "'...'", "'}'", "'*'", "'/'", "'%'", "'+'", 
                     "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "BOOLEAN", "ID", "STRING", "NUMBER", 
                      "WS" ];

var ruleNames =  [ "source", "sourceFactory", "expression", "name" ];

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
StremParser.T__18 = 19;
StremParser.T__19 = 20;
StremParser.BOOLEAN = 21;
StremParser.ID = 22;
StremParser.STRING = 23;
StremParser.NUMBER = 24;
StremParser.WS = 25;

StremParser.RULE_source = 0;
StremParser.RULE_sourceFactory = 1;
StremParser.RULE_expression = 2;
StremParser.RULE_name = 3;

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


function ComposeContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComposeContext.prototype = Object.create(SourceContext.prototype);
ComposeContext.prototype.constructor = ComposeContext;

StremParser.ComposeContext = ComposeContext;

ComposeContext.prototype.sourceFactory = function() {
    return this.getTypedRuleContext(SourceFactoryContext,0);
};

ComposeContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};
ComposeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitCompose(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MergeContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    this.right = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MergeContext.prototype = Object.create(SourceContext.prototype);
MergeContext.prototype.constructor = MergeContext;

StremParser.MergeContext = MergeContext;

MergeContext.prototype.source = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceContext);
    } else {
        return this.getTypedRuleContext(SourceContext,i);
    }
};
MergeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitMerge(this);
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


function FollowContext(parser, ctx) {
	SourceContext.call(this, parser);
    this.left = null; // SourceContext;
    this.right = null; // SourceContext;
    SourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FollowContext.prototype = Object.create(SourceContext.prototype);
FollowContext.prototype.constructor = FollowContext;

StremParser.FollowContext = FollowContext;

FollowContext.prototype.source = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceContext);
    } else {
        return this.getTypedRuleContext(SourceContext,i);
    }
};
FollowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitFollow(this);
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
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, StremParser.RULE_source, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SubSourceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 9;
            this.match(StremParser.T__0);
            this.state = 10;
            this.source(0);
            this.state = 11;
            this.match(StremParser.T__1);
            break;

        case 2:
            localctx = new SingleSourceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 13;
            this.expression(0);
            break;

        case 3:
            localctx = new NamedSourceContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 14;
            this.name();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 28;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 26;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new FollowContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 17;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 18;
                    this.match(StremParser.T__2);
                    this.state = 19;
                    localctx.right = this.source(6);
                    break;

                case 2:
                    localctx = new MergeContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 20;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 21;
                    this.match(StremParser.T__3);
                    this.state = 22;
                    localctx.right = this.source(5);
                    break;

                case 3:
                    localctx = new ComposeContext(this, new SourceContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_source);
                    this.state = 23;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 24;
                    this.match(StremParser.T__4);
                    this.state = 25;
                    this.sourceFactory();
                    break;

                } 
            }
            this.state = 30;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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


function DelayContext(parser, ctx) {
	SourceFactoryContext.call(this, parser);
    this.amount = null; // Token;
    this.unit = null; // Token;
    SourceFactoryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DelayContext.prototype = Object.create(SourceFactoryContext.prototype);
DelayContext.prototype.constructor = DelayContext;

StremParser.DelayContext = DelayContext;

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


function EachContext(parser, ctx) {
	SourceFactoryContext.call(this, parser);
    SourceFactoryContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EachContext.prototype = Object.create(SourceFactoryContext.prototype);
EachContext.prototype.constructor = EachContext;

StremParser.EachContext = EachContext;

EachContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitEach(this);
    } else {
        return visitor.visitChildren(this);
    }
};



StremParser.SourceFactoryContext = SourceFactoryContext;

StremParser.prototype.sourceFactory = function() {

    var localctx = new SourceFactoryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StremParser.RULE_sourceFactory);
    var _la = 0; // Token type
    try {
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StremParser.ID:
            localctx = new NamedSourceFactoryContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.name();
            break;
        case StremParser.T__5:
            localctx = new MapContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.match(StremParser.T__5);
            this.state = 33;
            this.name();
            break;
        case StremParser.T__6:
            localctx = new FilterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 34;
            this.match(StremParser.T__6);
            this.state = 35;
            this.name();
            break;
        case StremParser.T__7:
            localctx = new DelayContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 36;
            this.match(StremParser.T__7);
            this.state = 37;
            localctx.amount = this.match(StremParser.NUMBER);
            this.state = 38;
            localctx.unit = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StremParser.T__8) | (1 << StremParser.T__9) | (1 << StremParser.T__10) | (1 << StremParser.T__11))) !== 0))) {
                localctx.unit = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case StremParser.T__12:
            localctx = new EachContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 39;
            this.match(StremParser.T__12);
            this.state = 40;
            this.match(StremParser.T__13);
            this.state = 41;
            this.match(StremParser.T__14);
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

function StringExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(ExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

StremParser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.STRING = function() {
    return this.getToken(StremParser.STRING, 0);
};
StringExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitStringExpression(this);
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


function MultiplicativeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeContext.prototype = Object.create(ExpressionContext.prototype);
MultiplicativeContext.prototype.constructor = MultiplicativeContext;

StremParser.MultiplicativeContext = MultiplicativeContext;

MultiplicativeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultiplicativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitMultiplicative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BooleanExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BooleanExpressionContext.prototype.constructor = BooleanExpressionContext;

StremParser.BooleanExpressionContext = BooleanExpressionContext;

BooleanExpressionContext.prototype.BOOLEAN = function() {
    return this.getToken(StremParser.BOOLEAN, 0);
};
BooleanExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitBooleanExpression(this);
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


function AdditiveContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveContext.prototype = Object.create(ExpressionContext.prototype);
AdditiveContext.prototype.constructor = AdditiveContext;

StremParser.AdditiveContext = AdditiveContext;

AdditiveContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AdditiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof StremVisitor ) {
        return visitor.visitAdditive(this);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StremParser.T__0:
            localctx = new SubExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 45;
            this.match(StremParser.T__0);
            this.state = 46;
            this.expression(0);
            this.state = 47;
            this.match(StremParser.T__1);
            break;
        case StremParser.NUMBER:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 49;
            this.match(StremParser.NUMBER);
            break;
        case StremParser.STRING:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 50;
            this.match(StremParser.STRING);
            break;
        case StremParser.BOOLEAN:
            localctx = new BooleanExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 51;
            this.match(StremParser.BOOLEAN);
            break;
        case StremParser.ID:
            localctx = new NamedExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 52;
            this.name();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 63;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 61;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicativeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 55;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 56;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StremParser.T__15) | (1 << StremParser.T__16) | (1 << StremParser.T__17))) !== 0))) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 57;
                    localctx.right = this.expression(4);
                    break;

                case 2:
                    localctx = new AdditiveContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, StremParser.RULE_expression);
                    this.state = 58;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 59;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===StremParser.T__18 || _la===StremParser.T__19)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 60;
                    localctx.right = this.expression(3);
                    break;

                } 
            }
            this.state = 65;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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
        this.state = 66;
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
	case 0:
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
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

StremParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.StremParser = StremParser;
