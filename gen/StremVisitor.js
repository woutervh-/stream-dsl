// Generated from C:/Users/vanheewo/workspace/stream-dsl/src\Strem.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by StremParser.

function StremVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

StremVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
StremVisitor.prototype.constructor = StremVisitor;

// Visit a parse tree produced by StremParser#program.
StremVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#namedSource.
StremVisitor.prototype.visitNamedSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#subSource.
StremVisitor.prototype.visitSubSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#compose.
StremVisitor.prototype.visitCompose = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#values.
StremVisitor.prototype.visitValues = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#merge.
StremVisitor.prototype.visitMerge = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#singleSource.
StremVisitor.prototype.visitSingleSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#follow.
StremVisitor.prototype.visitFollow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#namedSourceFactory.
StremVisitor.prototype.visitNamedSourceFactory = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#map.
StremVisitor.prototype.visitMap = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#filter.
StremVisitor.prototype.visitFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#delay.
StremVisitor.prototype.visitDelay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#add.
StremVisitor.prototype.visitAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#namedExpression.
StremVisitor.prototype.visitNamedExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#numberExpression.
StremVisitor.prototype.visitNumberExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#subtract.
StremVisitor.prototype.visitSubtract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#divide.
StremVisitor.prototype.visitDivide = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#multiply.
StremVisitor.prototype.visitMultiply = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#subExpression.
StremVisitor.prototype.visitSubExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by StremParser#name.
StremVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};



exports.StremVisitor = StremVisitor;