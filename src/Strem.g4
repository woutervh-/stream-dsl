grammar Strem;

program
  : source
  ;

source
  : '(' source ')' #subSource
  | '[' expression (',' expression)* ']' #values
  | left=source ',' right=source #follow
  | left=source '|' right=source #merge
  | left=source '->' sourceFactory #compose
  | name #namedSource
  | expression #singleSource
  ;

sourceFactory
  : name #namedSourceFactory
  | 'map' name #map
  | 'filter' name #filter
  | 'delay' amount=NUMBER unit=('ms' | 's' | 'min' | 'h') #delay
  ;

expression
  : '(' expression ')' #subExpression
  | NUMBER #numberExpression
  | left=expression '*' right=expression #multiply
  | left=expression '/' right=expression #divide
  | left=expression '+' right=expression #add
  | left=expression '-' right=expression #subtract
  | name #namedExpression
  ;

name : ID;

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
// no leading zeros

fragment EXP
  : [Ee] [+\-]? INT
  ;
// \- since - means "range" inside [...]

WS
  : [ \t\n\r] + -> skip
  ;
