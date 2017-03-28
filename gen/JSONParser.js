// Generated from C:/Users/vanheewo/workspace/stream-dsl/src\JSON.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JSONVisitor = require('./JSONVisitor').JSONVisitor;

var grammarFileName = "JSON.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000eI\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001b\n\u0003\f\u0003\u000e",
    "\u0003\u001e\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003$\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005.\n\u0005",
    "\f\u0005\u000e\u00051\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u00057\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006?\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003",
    "\u0003\u0002\t\nH\u0002\u0014\u0003\u0002\u0002\u0002\u0004#\u0003\u0002",
    "\u0002\u0002\u0006%\u0003\u0002\u0002\u0002\b6\u0003\u0002\u0002\u0002",
    "\n>\u0003\u0002\u0002\u0002\f@\u0003\u0002\u0002\u0002\u000eB\u0003",
    "\u0002\u0002\u0002\u0010D\u0003\u0002\u0002\u0002\u0012F\u0003\u0002",
    "\u0002\u0002\u0014\u0015\u0005\n\u0006\u0002\u0015\u0003\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0007\u0003\u0002\u0002\u0017\u001c\u0005\u0006",
    "\u0004\u0002\u0018\u0019\u0007\u0004\u0002\u0002\u0019\u001b\u0005\u0006",
    "\u0004\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001e\u0003\u0002",
    "\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002",
    "\u0002\u0002\u001d\u001f\u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002",
    "\u0002\u0002\u001f \u0007\u0005\u0002\u0002 $\u0003\u0002\u0002\u0002",
    "!\"\u0007\u0003\u0002\u0002\"$\u0007\u0005\u0002\u0002#\u0016\u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002$\u0005\u0003\u0002\u0002",
    "\u0002%&\u0007\f\u0002\u0002&\'\u0007\u0006\u0002\u0002\'(\u0005\n\u0006",
    "\u0002(\u0007\u0003\u0002\u0002\u0002)*\u0007\u0007\u0002\u0002*/\u0005",
    "\n\u0006\u0002+,\u0007\u0004\u0002\u0002,.\u0005\n\u0006\u0002-+\u0003",
    "\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002",
    "/0\u0003\u0002\u0002\u000202\u0003\u0002\u0002\u00021/\u0003\u0002\u0002",
    "\u000223\u0007\b\u0002\u000237\u0003\u0002\u0002\u000245\u0007\u0007",
    "\u0002\u000257\u0007\b\u0002\u00026)\u0003\u0002\u0002\u000264\u0003",
    "\u0002\u0002\u00027\t\u0003\u0002\u0002\u00028?\u0005\f\u0007\u0002",
    "9?\u0005\u000e\b\u0002:?\u0005\u0004\u0003\u0002;?\u0005\b\u0005\u0002",
    "<?\u0005\u0010\t\u0002=?\u0005\u0012\n\u0002>8\u0003\u0002\u0002\u0002",
    ">9\u0003\u0002\u0002\u0002>:\u0003\u0002\u0002\u0002>;\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?\u000b\u0003",
    "\u0002\u0002\u0002@A\u0007\f\u0002\u0002A\r\u0003\u0002\u0002\u0002",
    "BC\u0007\r\u0002\u0002C\u000f\u0003\u0002\u0002\u0002DE\t\u0002\u0002",
    "\u0002E\u0011\u0003\u0002\u0002\u0002FG\u0007\u000b\u0002\u0002G\u0013",
    "\u0003\u0002\u0002\u0002\u0007\u001c#/6>"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", 
                     "'false'", "'null'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "json", "obj", "pair", "array", "value", "str", "num", 
                   "bool", "nul" ];

function JSONParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JSONParser.prototype = Object.create(antlr4.Parser.prototype);
JSONParser.prototype.constructor = JSONParser;

Object.defineProperty(JSONParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JSONParser.EOF = antlr4.Token.EOF;
JSONParser.T__0 = 1;
JSONParser.T__1 = 2;
JSONParser.T__2 = 3;
JSONParser.T__3 = 4;
JSONParser.T__4 = 5;
JSONParser.T__5 = 6;
JSONParser.T__6 = 7;
JSONParser.T__7 = 8;
JSONParser.T__8 = 9;
JSONParser.STRING = 10;
JSONParser.NUMBER = 11;
JSONParser.WS = 12;

JSONParser.RULE_json = 0;
JSONParser.RULE_obj = 1;
JSONParser.RULE_pair = 2;
JSONParser.RULE_array = 3;
JSONParser.RULE_value = 4;
JSONParser.RULE_str = 5;
JSONParser.RULE_num = 6;
JSONParser.RULE_bool = 7;
JSONParser.RULE_nul = 8;

function JsonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_json;
    return this;
}

JsonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonContext.prototype.constructor = JsonContext;

JsonContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

JsonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitJson(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.JsonContext = JsonContext;

JSONParser.prototype.json = function() {

    var localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JSONParser.RULE_json);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.value();
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

function ObjContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_obj;
    return this;
}

ObjContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjContext.prototype.constructor = ObjContext;

ObjContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

ObjContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitObj(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.ObjContext = ObjContext;

JSONParser.prototype.obj = function() {

    var localctx = new ObjContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JSONParser.RULE_obj);
    var _la = 0; // Token type
    try {
        this.state = 33;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.match(JSONParser.T__0);
            this.state = 21;
            this.pair();
            this.state = 26;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONParser.T__1) {
                this.state = 22;
                this.match(JSONParser.T__1);
                this.state = 23;
                this.pair();
                this.state = 28;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 29;
            this.match(JSONParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.match(JSONParser.T__0);
            this.state = 32;
            this.match(JSONParser.T__2);
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

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_pair;
    this.left = null; // Token
    this.right = null; // ValueContext
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.STRING = function() {
    return this.getToken(JSONParser.STRING, 0);
};

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.PairContext = PairContext;

JSONParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JSONParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        localctx.left = this.match(JSONParser.STRING);
        this.state = 36;
        this.match(JSONParser.T__3);
        this.state = 37;
        localctx.right = this.value();
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

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.ArrayContext = ArrayContext;

JSONParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JSONParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 52;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 39;
            this.match(JSONParser.T__4);
            this.state = 40;
            this.value();
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JSONParser.T__1) {
                this.state = 41;
                this.match(JSONParser.T__1);
                this.state = 42;
                this.value();
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 48;
            this.match(JSONParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 50;
            this.match(JSONParser.T__4);
            this.state = 51;
            this.match(JSONParser.T__5);
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.str = function() {
    return this.getTypedRuleContext(StrContext,0);
};

ValueContext.prototype.num = function() {
    return this.getTypedRuleContext(NumContext,0);
};

ValueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

ValueContext.prototype.nul = function() {
    return this.getTypedRuleContext(NulContext,0);
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.ValueContext = ValueContext;

JSONParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JSONParser.RULE_value);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JSONParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.str();
            break;
        case JSONParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 55;
            this.num();
            break;
        case JSONParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 56;
            this.obj();
            break;
        case JSONParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 57;
            this.array();
            break;
        case JSONParser.T__6:
        case JSONParser.T__7:
            this.enterOuterAlt(localctx, 5);
            this.state = 58;
            this.bool();
            break;
        case JSONParser.T__8:
            this.enterOuterAlt(localctx, 6);
            this.state = 59;
            this.nul();
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

function StrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_str;
    return this;
}

StrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrContext.prototype.constructor = StrContext;

StrContext.prototype.STRING = function() {
    return this.getToken(JSONParser.STRING, 0);
};

StrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitStr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.StrContext = StrContext;

JSONParser.prototype.str = function() {

    var localctx = new StrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JSONParser.RULE_str);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(JSONParser.STRING);
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

function NumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_num;
    return this;
}

NumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumContext.prototype.constructor = NumContext;

NumContext.prototype.NUMBER = function() {
    return this.getToken(JSONParser.NUMBER, 0);
};

NumContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitNum(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.NumContext = NumContext;

JSONParser.prototype.num = function() {

    var localctx = new NumContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, JSONParser.RULE_num);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(JSONParser.NUMBER);
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

function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;


BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.BoolContext = BoolContext;

JSONParser.prototype.bool = function() {

    var localctx = new BoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, JSONParser.RULE_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        _la = this._input.LA(1);
        if(!(_la===JSONParser.T__6 || _la===JSONParser.T__7)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

function NulContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JSONParser.RULE_nul;
    return this;
}

NulContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NulContext.prototype.constructor = NulContext;


NulContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JSONVisitor ) {
        return visitor.visitNul(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JSONParser.NulContext = NulContext;

JSONParser.prototype.nul = function() {

    var localctx = new NulContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, JSONParser.RULE_nul);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(JSONParser.T__8);
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


exports.JSONParser = JSONParser;
