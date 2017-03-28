grammar JSON;

json
  : value
  ;

obj
  : '{' pair (',' pair)* '}'
  | '{' '}'
  ;

pair
  : left=STRING ':' right=value
  ;

array
  : '[' value (',' value)* ']'
  | '[' ']'
  ;

value
  : str
  | num
  | obj
  | array
  | bool
  | nul
  ;

str : STRING;

num: NUMBER;

bool: 'true' | 'false';

nul: 'null';

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
