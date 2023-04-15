//alert("Zeenat");
//Task1
//Calculate the zakat value, first, create a variable named "zakatPercentage" and
//store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//named "userInput" and take the input from the user using the prompt. Make sure
//the input value is of a type number by converting the input string to a number
//using a suitable method. Then, create a variable named "result" and assign its value
//to the multiplication of the zakat percentage and user input. Finally, use an alert
//message to display the calculated zakat value. The message should look like this:
//"Your zakat value is xxx".

/*var Zakat_persantage =0.025; //2.5%
var user_input  = Number(prompt("Enter your Amount"));
var result = 0.025 * user_input;
alert("your zakat is " + result);*/

//Task2
//calculate the fitrah amount, first, ask the user to enter the total number of family
//members using the prompt and store the value in a variable called
//"familyMembers". Next, ask the user to choose a fitrah method by providing them
//options using the prompt, and store the selected method and its price in variables.
//Then, use an if-else block to check the user's input and calculate the fitrah amount
//by multiplying the selected method's price with the number of family members.
//Finally, display the calculated fitrah amount using an alert message.
/*var Wheat = "Wheat"
var Barley = "Barley"
var Rice = "Rice"
var Dates = "Dates"
var Raisins = "Raisins"
var familyMembers = Number(prompt("total numbers of family members" ));// + "a select a fitra itenm " +" "+ item1 +" "+ item2 +" "+ item3 +" "+ item4 +" "+ item5);
 var fitraItem = prompt("chose fitraItem ") //+ "Wheat = 300 , Barley = 400 , Rice = 700 , Dates = 1200 , Raisins = 1700";
if(fitraItem == Wheat ); {
alert ("your fitra amount is" + familyMembers*300);
}  if (fitraItem == Barely) {
    alert ("your fitra amount is" + familyMembers*400);
}  if (fitraItem == Rice); {
   alert ("your fitra amnunt is" + familyMembers*700);
}  if (fitraItem == Dates); {
    alert ("your fitra amount is" + familyMembers*1200);
}  if (fitraItem == Raisins); {
  alert ("your fitra amount is" + familyMembers*1700);

}
 {
    alert("chose your option");
} */

/*Task3
Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again.
 
var randomNumbers = ("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
var secreteNumber = (7);
prompt("guess secretNumber from 1-15")
alert("your secretNumber is " + 7);
console.log(secreteNumber);
if(secreteNumber==randomNumbers);
 
alert("Cnogatulations!");
if("randomNumbers > secreteNumber ");
{alert("false! number is high");}
if ("randomNumbers < secreteNumber");
{alert("false! numbern is low")*/
//Task4
//Create a program that asks the user to enter a name, and then prints out the name
//with the first letter capitalized (Make your name in capitalized case).
var name = prompt("zeenat");
let first_letter = name.slice(0,1);
alert("your name with first letter capitalized :"+ first_letter.uper_case()+ name.slice(1,));
//Task 5:
//In this task, you will be creating two empty arrays called "contactNumbers" and
//"contactNames". Using the prompt, you will ask the user to enter a contact number
//and contact name. You will then push these values into their respective arrays
//using the push method. After adding all the contacts, you will display the contact
//numbers and names in the console. To do this, you will need to use a for loop to
//iterate through both arrays and log each element to the console.
//Make sure to use descriptive variable names and comment on your code for clarity.
//var numbers= ["02345,34257,56432,67890,45673"]; 
/*var contactName = [];  
var contactnumber = [];
var name = prompt("enter your name ?");
alert("");
//var number = ["02345,34257,56432,67890,45673"];
//var number = prompt("enter your number?")

//alert();

for(var a = 0; a <= 4; a) ; {
  document.write(ary[a] + "<br>");
//alert("02345,34257,56432,67890,45673");
//alert("Ali, Aliya, Saad, Hafsa,");

console.log(hello)}*/



//Task 6:
//Create an Array that contains different products, and get input from the user in which you
//ask your user to give the position of that element he/she wants. Now remove that Item
//from your array and console the removed item, Also display the remaining items in the
//array and total number of items remaining.
/*var a = ["cock" , "sevenup" , "faita" , "sprite"];
var userInput = prompt("which one do yuo want?");
var position = (prompt(1-" + product.length+"));
var position = (prompt(1-" + products.lenght+"));
var removiableProduct = products.splice(position - 1,1);*/
//Task 7:
//Create a program that asks the user for their nationality, gender, and age using the prompt
//function. The program should then use nested if-else statements to determine if the
//person is eligible to vote.
//First, the program should check if the person is Pakistani or Indian. If they are not, the
//program should display a message saying they are not eligible to vote.
//If they are Pakistani or Indian, the program should then check their gender. If the person is
//male and over the age of 18, they are eligible to vote. If the person is female and over the
//age of 18, the program should ask if they are married. If they are married, they are eligible
//to vote. If they are not married, they are not eligible to vote.
//If the person is under 18, the program should display a message saying they are not eligible
//to vote.
/*var nationality = prompt("enter your nationality");
var age = +prompt("enter your age");
if (nationality == "Pakistani || nationality" == "Pakistani" && age)
console.log("go to vote area")
]
else if (nationality =="Indian")
console.log("you're not eligible to vote in Pakistan")
]
else {
  console.log("you're under age or Non-Paistani")
}
var age = 24
console.log>= 24*/



//Task 8:
//You have an array of that contains the name of Pakistani Teams Player selected for
//WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
//India, So make an array of final team players (11 Players) that will be playing in tomorrows
//match from the WorldCupSquad array.
//(Hint : Make sure it should not disturb the array that contains 15 players instead you have
//to make a copy of this array)
/*var players_names = [
  MUHAMMAD YOUNIS, ZAHID TAJ,
  ZAHID RAFIQUE,
  BASHIR AHMED	
  PERVAIZ,
  AMIR KHAN,
  MOHAMMAD TARIQ,
  TANVEER AHMED,
  NASIR ISMAIL,
  HAROON YOUSAF,
  MID	SARFAZ RASOOL,
  ABDUL GHAFFER,
  SHAHID SALEEM,
  BABAR MEHMOOD,
  MUHAMMAD ARSHAD,
]

var fnnal_Players = players_names.slice(0, 10);
var players_names = prompt("what are the names of final players?")
consol.log("final players :")
for (var i = 0; i < final_players.lenght; i++) {
  console.log(i + 1 + final - players)
}
alert(MUHAMMAD YOUNIS	,
ZAHID TAJ	 ,
ZAHID RAFIQUE	 ,     
BASHIR AHMED	,
PERVAIZ    	    ,  
AMIR KHAN	,
MOHAMMAD TARIQ,	
TANVEER AHMED	,
  NASIR ISMAIL	,
  HAROON YOUSAF ,	
  MID	SARFAZ RASOOL,);*/