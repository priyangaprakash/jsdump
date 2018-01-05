//****************OBJECT**************************

//object literals
/*	Object is a non-primitive data type in JavaScript. It is like any other variable, the only difference is that an object holds multiple values in terms of properties and methods.
 Properties can hold values of primitive data types and methods are functions.
	In other programming languages like Java or C#, you need a class to create an object of it. 
 In JavaScript, an object is a standalone entity because there is no class in JavaScript. 
	However, you can achieve class like functionality using functions.
	We will learn how to treat a function as a class in the advance JavaScript section.
*/

/*
  var objname = {key1:val1,key2:val2,..........,keyn:valn}
*/

/*
****************Wrong syntax**********************
var person = { firstName };
var person = { firstName: };
*/

var msg = {};//obj with no property and methods
var person = { firstName: "John" }; // object with single property

                      
					  
					  // object with single method
var message = { 
                showMessage: function (val) { 
                                alert(val); //it wont return anything just an example
                            } 
                }; 
				
				
//**************************************************************************************			
                              //object with method and properties
var person = { 
             firstName: "James", 
             lastName: "Bond", 
             age: 25, 
             getFullName: function () { 
             return this.firstName + ' ' + this.lastName 
           } 
         };
person.firstName; // returns James
person.lastName; // returns Bond

person["firstName"];// returns James
person["lastName"];// returns Bond

alert(person.getFullName); //without () will return function definition
alert(person.getFullName()); //with () will return actual result

//****************************************************************************************                          
							   //object constructor
var person = new Object();
// Attach properties and methods to person object     
person.firstName = "James";
person["lastName"] = "Bond"; 
person.age = 25;
person.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
	
//******************************************************************************************
                                // access properties & methods 
person.firstName; // James
person.lastName; // Bond
person.getFullName(); // James Bond

for(var key in person){
        alert(key);
    }; //return firstName,lastName,age,getFullName (i.e. evry key is returned)
	
//******************************************************************************************
                                    //Undefined property
var person1 = new Object();    
person1.firstName; // returns undefined
if(person1.hasOwnProperty("firstName"))
{
    alert(person1.firstName); //undefined
}

//*******************************************************************************************
                                       //object pass by refernce
function changeFirstName(per)
{
    per.firstName = "Steve";
}
var person = { firstName : "Bill" };
changeFirstName(person)    
person.firstName; // returns Steve

//***********************************************************************************************
                                       //Object reference
   /*
     If, two objects point to the same object then 
	 the change made in one object will reflect in another object.
   */
var person = { firstName : "John" };
var anotherPerson = person;  
anotherPerson.firstName = "Bill";
person.firstName; //returns Bill

//************************************************************************************************
                                        //Nested Objects
var person = {
    firstName: "James",
    lastName: "Bond",
    age: 25,
    address: {
        id: 1,
        country:"UK"
    }
};

person.address.country; // returns "UK"
