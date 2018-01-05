var one = "priya";
var two = 'priya';
alert("Double quotes denotes string "+one);
alert("Single quote also denotes string "+two);

//string concatenation
var fullstring = one+two;
alert("after concatenated "+fullstring);

//string as array
var three = "prak";
/*
three[0] = p;
three[1] = r;
three[2] = a;
three[3] = k;

*/

alert("First charater is "+three[0]);
alert("string.length is used to find length of the string "+three.length);

//using quotation within the string
alert("this is 'simple' string"); //it will run as it is

//for inserting double quotes we need to include backslash character
alert("this is \"priya\" string");

                        //**********STRING OBJECT*************
var mystr1 = new String("priya");
var mystr2 = new String("priya");

var str1 = "prakash";
var str2 = "prakash";

if(mystr1 == mystr2) //false because two objects are different
{
  alert("obj matches without type");
}
else
{
  alert("no obj match without type");
}
if(str1 == str2) //true because two strings are same
{
  alert("str matches without type");
}
else
{
  alert("no str match without type");
}

if(mystr1 === mystr2) //false because two objects are different
{
  alert("obj matches with type");
}
else
{
  alert("no obj match with type");
}

if(str1 === str2) //true because two strings are same
{
  alert("str matches with type");
}
else
{
  alert("no str match with type");
}

alert("type of mystr1 is "+typeof(mystr1));
alert("type of str1 is "+typeof(str1));

//IT IS HIGHLY RECOMMENDED TO USE PRIMITIVE STRINGS INSTEAD OF STRING OBJECT

//**************string methods********************************
//for string methods just refer internet when there is a need
var s = "priya";
var b = "prakash";
var c = "this is jscript";
alert("charAt(2)"+s.charAt(2));
alert("charCodeAt(2) return number indicating unicode valueof the char "+s.charCodeAt(2));
alert("concat function"+s.concat(" prakash"));
alert("indexOf(searchstring,position)"+b.indexOf("a",3)); //return the first occurrence of specified string strating from specified number index
alert("lastIndexOf(searchstring,position)"+b.lastIndexOf("a",5)); //return the last occurrence of specified string strating from specified number index
alert(b.slice(1,3)); //return ra (1,2)positions
//alert(b.split("is",",");
alert("substring "+b.substring(1,3)); //returns ra
alert("substr"+b.substr(1,1)); //second parameter specifies the length the character extracted
//return 'r'

alert("split "+c.split(" ")); //split this,is,jscript
alert("split "+c.split("i")); //split th,s ,s jscr,pt
alert("split "+c.split(" ",2)); //split this,is
alert("toLowercase "+s.toLowerCase());
alert("toUppercase "+s.toUpperCase());
alert("toLocaleLower "+s.toLocaleLowerCase());
alert("toLocaleUpper "+s.toLocaleUpperCase());
alert("value of b "+b.valueOf());

var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/gi);
alert("global match "+res); //case sensitive

var str5 = "The rain in SPAIN stays mainly in the plain"; 
var res5 = str5.match(/ain/g);
alert("local match "+res5); //case insensitive
//in the above 'g' and "gi" are modifiers

//like the above some other methods are
/*localeCompare(string,position);
  match(regexp);
  search(regexp);
  slice(startnum,endnumb);
  split(seperatorstring,limitnumber);
*/

var str6= "Visit W3Schools";
var n = str6.search(/w3schools/i);//here 'i' is a modifier which is case insensitive
alert("search example "+n); //return 6

/*
var str = "Visit W3Schools!";
var n = str.search("W3Schools"); //also displays same result
*/

var str7 = "Visit Microsoft!";
var res7 = str7.replace(/microsoft/i, "W3Schools"); //returns visit W3Schools
alert("replace "+res7);

/*
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools"); //also displays same results
*/
 