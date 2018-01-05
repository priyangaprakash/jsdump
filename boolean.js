//**************************Boolean*****************************
var YES = true;
var NO = false;

if(YES)
{
    alert("This code block will be executed");
}

if(NO)
{
    alert("This code block will not be executed");
}

alert(1>4); //false

//boolean object
var bool = new Boolean(true);
alert(bool); // true

/*JavaScript treats empty string (""), 0, undefined and null as false.
   Everything else is true.
*/
var bool1 = new Boolean(""); // false

var bool2 = new Boolean(0); // false

var bool3 = new Boolean(undefined); // false

var bool4 = new Boolean(null); // false

var bool5 = new Boolean(NaN); // false

var bool6 = new Boolean("some text"); // true

var bool7 = new Boolean(1); // true

//Boolean methods
var result1 = (1 > 2); result1.toLocaleString(); // returns "false"
var result2 = (1 > 2); result2.toString(); // returns "false"
var result3 = (1 > 2); result3.valueOf(); // returns false