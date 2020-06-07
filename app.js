                                            // Chapter 1

alert("Welcome To My Website!");

alert("Error! Please enter a valid password.");

alert("Welcome to JS Land...\nHappy Coding!");

alert("Welcome to JS Land...");
alert("Happy Coding!");

console.log("Hello... I can run JS through my web browser's console");

                                            // Chapter 2

var username;

var myName = "Zubair Afzal";

var message = "Hello World!";
alert(message);

var name = "Zubair Afzal";
var age = 25 + " Years Old";
var experties = "Certified Web & Mobile App Develpor";
alert(name);
alert(age);
alert(experties);

var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(food);

var email = "zubairafzal100@gmail.com";
alert("My email address is " + email);

var book = "A smarter\nway to learn JavaScript.";
alert("I am trying to learn from the Book " + book);

document.write("Yah! I can write HTML content through JavaScript");

var pattern = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(pattern);
document.write(pattern);

                                            // Chapter 3

var age = 25;
alert("I am " + age + " years old");

var track = 1;
for (var i = 1; i <= 10000; i++) {
    alert("You have visited this site " + track++ + " times");
}

var birthYear = 1994;
document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");

var onlineStore = "XYZ Clothing store"
var name = prompt("Enter Your Name");
var productTitle = prompt("Product Name");
var quantity = prompt("Enter Quantity");
document.write("<b>"+name+"</b>" + " ordered " + "<b>"+quantity+"</b>" + " " + "<b>"+productTitle+"</b>" + "(s)" + " on " + onlineStore);

                                            // Chapter 4

var a = b = c;

// Legal Variables
var name;
var birthDate;
var birthCity;
var fatherName;
var residence;

// Illegal Variables
var !name;
var £city;
var %state;
var &country;
var 12number;

document.write("<h2>" + "Rules for naming JS variables" + "</h2>");
document.write("<p>" + "Variable names can only contain numbers, $ and _ . For example : " + "<b>" + "$my_1stVariable" + "</b>" + "</p>");
document.write("<p>" + "Variable must begin with a letter, $ or _ . For example : " + "<b>" + "$name" + "</b>" + ", " + "<b>" + "_name " + "</b>" + "or" + "<b>" + " name" + "</b>" + "</p>");
document.write("<p>" + "Variable names are case sensitive" + "</p>");
document.write("<p>" + "Variable names should not be JS keywords" + "</p>");

                                            // Chapter 5

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>" + "<br>");

var num1 = 10;
var num2 = 4;
var sub = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>" + "<br>");

var num1 = 4;
var num2 = 7;
var mul = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>" + "<br>");

var num1 = 21;
var num2 = 7;
var divi = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + divi + "<br>" + "<br>");

var num1 = 20;
var num2 = 3;
var mod = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);

var mathExpressions;
document.write("Value after variable declaration is " + mathExpressions + "<br>");
mathExpressions = 5;
document.write("Initial value: " + mathExpressions + "<br>");
mathExpressions = ++mathExpressions;
document.write("Value after increment is: " + mathExpressions + "<br>");
mathExpressions = mathExpressions + 7;
document.write("Value after addition is: " + mathExpressions + "<br>");
mathExpressions = --mathExpressions;
document.write("Value after decrement is: " + mathExpressions + "<br>");
mathExpressions = mathExpressions % 3;
document.write("The remainder is: " + mathExpressions + "<br>");

var ticketPrice = 600;
ticketPrice = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice + "PKR");

var table = 8;
document.write("Table of " + table + "<br>")
for (var i = 1; i <= 10; i++) {
    document.write("8 " + "x " + i + " = " + table*i + "<br>");    
}

var C = 25;
var F = 70;
C = (C * 9 / 5) + 32;
F = (F - 32) * 5 / 9;
document.write("25<sup>0</sup>C is " + C + "<sup>o</sup>F" + "<br>");
document.write("70<sup>0</sup>F is " + F + "<sup>o</sup>C");

var item1 = 650;
document.write("Price of item 1 is " + item1 + "<br>");
item1 = item1 * 3;
document.write("Quantity of item 1 is 3" + "<br>");
var item2 = 100;
document.write("Price of item 2 is " + item2 + "<br>");
item2 = item2 * 7;
document.write("Quantity of item 2 is 7" + "<br>");
var shippingCharges = 100;
document.write("Shipping Charges " + shippingCharges + "<br>" + "<br>");
var sum = item1 + item2 + shippingCharges;
document.write("Total cost of your order is " + sum);

                                            // Chapter 6-9

var a = 10;
document.write("Result: <br> The value of a is: " + a + "<br>" + "..................................................." + "<br>" + "<br>");
document.write("The value of ++a is: " + ++a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
document.write("The value of a++ is: " + a++ + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
document.write("The value of --a is: " + --a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
document.write("The value of a-- is: " + a-- + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br> b is " + b + "<br> result is " + result + "<br>" + "<br>");
a = 2;
b = 1;
document.write("a is " + a + "<br> b is " + b + "<br>");
a = --a;
document.write("result of --a is " + a + "<br>");
b = --b;
result = a - b;
document.write("result of --a - --b is " + (result) + "<br>");
result = (a - b) + ++b;
document.write("result of --a - --b + ++b is " + (result) + "<br>");
document.write("result of --a - --b + ++b + b-- is " + (result + b--));

var greet = prompt("Please Enter Your Name", "Zubair Afzal");
document.write("Hello! " + greet + ". Welcome to my website");

var userInput = +prompt("Please enter a valid number");
if (userInput) {
    for (var i = 1; i <= 10; i++) {
        document.write(userInput + " x " + i + " = " + userInput*i + "<br>");
    }
}else {
    for (var i = 1; i <= 10; i++) {
        document.write("5" + " x " + i + " = " + 5*i + "<br>");
    }
}

var sub1 = prompt("Enter 1st Subject");
var sub2 = prompt("Enter 2nd Subject");
var sub3 = prompt("Enter 3rd Subject");
var totalMarks = 100;
var sumOfTotalMarks = 100 * 3;
var marks1 = +prompt("Enter 1st Subject Obtained Marks");
var marks2 = +prompt("Enter 2nd Subject Obtained Marks");
var marks3 = +prompt("Enter 3rd Subject Obtained Marks");
var totalObtainedMarks = marks1 + marks2 + marks3;
var percentage1 = marks1 / totalMarks * 100;
var percentage2 = marks2 / totalMarks * 100;
var percentage3 = marks3 / totalMarks * 100;
var totalPercentage = totalObtainedMarks / sumOfTotalMarks * 100; 
document.write("<table border = 1px><tr><th><center>Subjects</center></th> <th><center>Total Marks</center></th> <th><center>Obtained Marks</center></th> <th><center>Percentage</center></th></tr>" + "<br>" + "<tr><td><center>" + sub1 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks1 + "</center></td> <td><center>" + percentage1 + "%</center>" + "</td></tr>" + "<br>" + "<tr><td><center>" + sub2 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks2 + "</center></td> <td><center>" + percentage2 + "%</center>" +  "</td></tr>" + "<br>" + "<tr><td><center>" + sub3 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks3 + "</center></td> <td><center>" + percentage3 + "%</center>" +  "</td></tr>" + "<br>" + "<tr><td>" + "" + "</td> <td><center>" + sumOfTotalMarks + "</center></td> <td><center>" + totalObtainedMarks + "</center></td> <td><center>" + totalPercentage + "%</center>" +  "</td></tr>");
