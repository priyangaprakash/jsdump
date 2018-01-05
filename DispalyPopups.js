                         //******************Displaying Popup messages**************

						 //+++++++++++++ALERT+++++++++++++++++
						 
//Alert will display the messages in alert box
/*
Alert will display a message of any type without need to convert it into string
*/
alert("Javacript from scratch");
alert(100);
alert(true);

                          //++++++++++++CONFIRM++++++++++++++++++++

//Confirm() will ask for confirmation with ok and cancel button

var a;
if(confirm("Do you want to delete this file?") == true)
{
  a = "File Deleted!!";
}
else
{
  a = "Deletion unsuccessful:((";
}
alert(a);

                           //+++++++++PROMPT+++++++++++++++++++

//prompt will ask for user's input
//prompt([string messageToBedisplayed],[string DefaultValue_Present_on_TextBox]);

var age = prompt("Please enter ur age","18");
if(age!=null)
{
  alert("your age is"+age+"valid for voting!!");  
}
else
{
  alert(age);
}

/*
since the above given functions are global functions, we can call it using window object like
window.alert()
window.confirm()
window.prompt()
*/