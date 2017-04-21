grammar Strem;

source
  : '(' source ')' #subSource
  | left=source ',' right=source #follow
  | left=source '|' right=source #merge
  | left=source '->' sourceFactory #compose
  | expression #singleSource
  | name #namedSource
  ;

sourceFactory
  : name #namedSourceFactory
  | 'map' name #map
  | 'filter' name #filter
  | 'delay' amount=NUMBER unit=('ms' | 's' | 'min' | 'h') #delay
  | '{' '...' '}' #each
  ;

expression
  : '(' expression ')' #subExpression
  | NUMBER #numberExpression
  | STRING #stringExpression
  | BOOLEAN #booleanExpression
  | left=expression operator=('*' | '/' | '%') right=expression #multiplicative
  | left=expression operator=('+' | '-') right=expression #additive
  | name #namedExpression
  ;

name : ID;

BOOLEAN
  : 'true' | 'false'
  ;

ID
 : [a-zA-Z_] [0-9a-zA-Z_]*
 ;

STRING
  : '"' (ESC | ~ ["\\])* '"'
  ;

fragment ESC
  : '\\' (["\\/bfnrt] | UNICODE)
  ;

fragment UNICODE
  : 'u' HEX HEX HEX HEX
  ;

fragment HEX
  : [0-9a-fA-F]
  ;

NUMBER
  : '-'? INT '.' [0-9] + EXP? | '-'? INT EXP | '-'? INT
  ;

fragment INT
  : '0' | [1-9] [0-9]*
  ;

fragment EXP
  : [Ee] [+\-]? INT
  ;

WS
  : [ \t\n\r] + -> skip
  ;
