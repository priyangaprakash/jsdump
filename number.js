                   //*************NUMBERS**********************
/*
var int = 100;
var float = 100.5;
var hex = 0xfff;
var exponential = 2.56e3;
var octal = 030;
*/
var num1 = new Number(100);
var num2 = new Number(100);

var num3 = 100;

num1 == num2; // false - because num1 and num2 are two different objects
num1 == num3; // true OBJ VS VALUE (both values are equal)
num1 === num3;//false OBJ VS VALUE  (one is obj and other is value)

typeof(num1); // object
typeof(num3); //number

alert(' Max Value: ' + Number.MAX_VALUE +
    '\n Min Value:' + Number.MIN_VALUE +
    '\n Negative Infinity:' + Number.NEGATIVE_INFINITY +
    '\n Positive Infinity:' + Number.POSITIVE_INFINITY +
    '\n NaN:' + Number.NaN
);

var num = 100; Num.toExponential(2); // returns '1.00e+2'
var num = 100; Num.toFixed(2); // returns '100.00'
var num = 100; Num.toLocaleString(); // returns '100'
var num = 100; Num.toPrecision(4); // returns '100.0'
var num = 100; Num.toString(); // returns '100'
var num = new Number(100); Num.valueOf(); // returns '100'