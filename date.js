//************************************DATE***************************************************

//we can display the current date by either calling Date() or by creating object for Date class

alert(Date()); //return current date like (Fri Dec 22 2017 15:07:03 GMT+0530 (India Standard Time))
var currentDate = new Date();
alert(currentDate); //same result as before

//we can create Date() objects in various format

var one = new Date("jun 8, 2018 11:24:28");
alert(one);

/* Using new Date(number), creates a new date object as zero time plus the number.
Zero time is 01 January 1970 00:00:00 UTC. The number is specified in milliseconds.
100000000000 milliseconds from Jan 1, 1970, is approximately Mar 3, 1973:
*/
var two = new Date(100000000000);
alert(two);

