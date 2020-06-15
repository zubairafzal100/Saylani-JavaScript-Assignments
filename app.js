//                                            // Chapter 1

// // task 1
// alert("Welcome To My Website!");

// // task 2
// alert("Error! Please enter a valid password.");

// // task 3
// alert("Welcome to JS Land...\nHappy Coding!");

// // task 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// // task 5
// console.log("Hello... I can run JS through my web browser's console");

//                                            // Chapter 2

// // task 1
// var username;

// // task 2
// var myName = "Zubair Afzal";

// // task 3
// var message = "Hello World!";
// alert(message);

// // task 4
// var name = "Zubair Afzal";
// var age = 25 + " Years Old";
// var experties = "Certified Web & Mobile App Develpor";
// alert(name);
// alert(age);
// alert(experties);

// // task 5
// var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(food);

// // task 6
// var email = "zubairafzal100@gmail.com";
// alert("My email address is " + email);

// // task 7
// var book = "A smarter\nway to learn JavaScript.";
// alert("I am trying to learn from the Book " + book);

// // task 8
// document.write("Yah! I can write HTML content through JavaScript");

// // task 9
// var pattern = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(pattern);
// document.write(pattern);

//                                            // Chapter 3

// // task 1                                            
// var age = 25;
// alert("I am " + age + " years old");

// // task 2
// var track = 1;
// for (var i = 1; i <= 10000; i++) {
//     alert("You have visited this site " + track++ + " times");
// }

// // task 3
// var birthYear = 1994;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");

// // task 4
// var onlineStore = "XYZ Clothing store"
// var name = prompt("Enter Your Name");
// var productTitle = prompt("Product Name");
// var quantity = prompt("Enter Quantity");
// document.write("<b>"+name+"</b>" + " ordered " + "<b>"+quantity+"</b>" + " " + "<b>"+productTitle+"</b>" + "(s)" + " on " + onlineStore);

//                                            // Chapter 4

// // task 1                                            
// var a = b = c;

// // task 2
// // Legal Variables
// var name;
// var birthDate;
// var birthCity;
// var fatherName;
// var residence;

// // Illegal Variables
// var !name;
// var £city;
// var %state;
// var &country;
// var 12number;

// // task 3
// document.write("<h2>" + "Rules for naming JS variables" + "</h2>");
// document.write("<p>" + "Variable names can only contain numbers, $ and _ . For example : " + "<b>" + "$my_1stVariable" + "</b>" + "</p>");
// document.write("<p>" + "Variable must begin with a letter, $ or _ . For example : " + "<b>" + "$name" + "</b>" + ", " + "<b>" + "_name " + "</b>" + "or" + "<b>" + " name" + "</b>" + "</p>");
// document.write("<p>" + "Variable names are case sensitive" + "</p>");
// document.write("<p>" + "Variable names should not be JS keywords" + "</p>");

//                                            // Chapter 5

// // task 1                                            
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>" + "<br>");

// // task 2
// var num1 = 10;
// var num2 = 4;
// var sub = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>" + "<br>");

// var num1 = 4;
// var num2 = 7;
// var mul = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>" + "<br>");

// var num1 = 21;
// var num2 = 7;
// var divi = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + divi + "<br>" + "<br>");

// var num1 = 20;
// var num2 = 3;
// var mod = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);

// // task 3
// var mathExpressions;
// document.write("Value after variable declaration is " + mathExpressions + "<br>");
// mathExpressions = 5;
// document.write("Initial value: " + mathExpressions + "<br>");
// mathExpressions = ++mathExpressions;
// document.write("Value after increment is: " + mathExpressions + "<br>");
// mathExpressions = mathExpressions + 7;
// document.write("Value after addition is: " + mathExpressions + "<br>");
// mathExpressions = --mathExpressions;
// document.write("Value after decrement is: " + mathExpressions + "<br>");
// mathExpressions = mathExpressions % 3;
// document.write("The remainder is: " + mathExpressions + "<br>");

// // task 4
// var ticketPrice = 600;
// ticketPrice = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice + "PKR");

// // task 5
// var table = 8;
// document.write("Table of " + table + "<br>")
// for (var i = 1; i <= 10; i++) {
//     document.write("8 " + "x " + i + " = " + table*i + "<br>");    
// }

// // task 6
// var C = 25;
// var F = 70;
// C = (C * 9 / 5) + 32;
// F = (F - 32) * 5 / 9;
// document.write("25<sup>0</sup>C is " + C + "<sup>o</sup>F" + "<br>");
// document.write("70<sup>0</sup>F is " + F + "<sup>o</sup>C");

// // task 7
// var item1 = 650;
// document.write("Price of item 1 is " + item1 + "<br>");
// item1 = item1 * 3;
// document.write("Quantity of item 1 is 3" + "<br>");
// var item2 = 100;
// document.write("Price of item 2 is " + item2 + "<br>");
// item2 = item2 * 7;
// document.write("Quantity of item 2 is 7" + "<br>");
// var shippingCharges = 100;
// document.write("Shipping Charges " + shippingCharges + "<br>" + "<br>");
// var sum = item1 + item2 + shippingCharges;
// document.write("Total cost of your order is " + sum);

//                                            // Chapter 6-9

// // task 1                                            
// var a = 10;
// document.write("Result: <br> The value of a is: " + a + "<br>" + "..................................................." + "<br>" + "<br>");
// document.write("The value of ++a is: " + ++a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of a++ is: " + a++ + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of --a is: " + --a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");
// document.write("The value of a-- is: " + a-- + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>" + "<br>");

// // task 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is " + a + "<br> b is " + b + "<br> result is " + result + "<br>" + "<br>");
// a = 2;
// b = 1;
// document.write("a is " + a + "<br> b is " + b + "<br>");
// a = --a;
// document.write("result of --a is " + a + "<br>");
// b = --b;
// result = a - b;
// document.write("result of --a - --b is " + (result) + "<br>");
// result = (a - b) + ++b;
// document.write("result of --a - --b + ++b is " + (result) + "<br>");
// document.write("result of --a - --b + ++b + b-- is " + (result + b--));

// // task 3
// var greet = prompt("Please Enter Your Name", "Zubair Afzal");
// document.write("Hello! " + greet + ". Welcome to my website");

// // task 4
// var userInput = +prompt("Please enter a valid number");
// if (userInput) {
//     for (var i = 1; i <= 10; i++) {
//         document.write(userInput + " x " + i + " = " + userInput*i + "<br>");
//     }
// }else {
//     for (var i = 1; i <= 10; i++) {
//         document.write("5" + " x " + i + " = " + 5*i + "<br>");
//     }
// }

// // task 5
// var sub1 = prompt("Enter 1st Subject");
// var sub2 = prompt("Enter 2nd Subject");
// var sub3 = prompt("Enter 3rd Subject");
// var totalMarks = 100;
// var sumOfTotalMarks = 100 * 3;
// var marks1 = +prompt("Enter 1st Subject Obtained Marks");
// var marks2 = +prompt("Enter 2nd Subject Obtained Marks");
// var marks3 = +prompt("Enter 3rd Subject Obtained Marks");
// var totalObtainedMarks = marks1 + marks2 + marks3;
// var percentage1 = marks1 / totalMarks * 100;
// var percentage2 = marks2 / totalMarks * 100;
// var percentage3 = marks3 / totalMarks * 100;
// var totalPercentage = totalObtainedMarks / sumOfTotalMarks * 100; 
// document.write("<table border = 1px><tr><th><center>Subjects</center></th> <th><center>Total Marks</center></th> <th><center>Obtained Marks</center></th> <th><center>Percentage</center></th></tr>" + "<br>" + "<tr><td><center>" + sub1 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks1 + "</center></td> <td><center>" + percentage1 + "%</center>" + "</td></tr>" + "<br>" + "<tr><td><center>" + sub2 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks2 + "</center></td> <td><center>" + percentage2 + "%</center>" +  "</td></tr>" + "<br>" + "<tr><td><center>" + sub3 + "</center></td> <td><center>" + totalMarks + "</center></td> <td><center>" + marks3 + "</center></td> <td><center>" + percentage3 + "%</center>" +  "</td></tr>" + "<br>" + "<tr><td>" + "" + "</td> <td><center>" + sumOfTotalMarks + "</center></td> <td><center>" + totalObtainedMarks + "</center></td> <td><center>" + totalPercentage + "%</center>" +  "</td></tr>");

//                                            // Chapter 9-11

// // task 1  
// var city = prompt("Enter City Name");
// if (city === "Karachi" || city === "karachi") {
//     document.write("Welcome to city of lights")
// }else {
//     document.write("Welcom to " + city);
// }

// // task 2
// var gender = prompt("Please Enter Your Gender");
// if (gender === "Male" || gender === "male") {
//     document.write("Good Morning Sir");
// } else if (gender === "Female" || gender === "female") {
//     document.write("Good Morning Ma’am");
// }else {
//     document.write("Please Enter Correct Gender");
// }

// // task 3
// var signalColor = prompt("Please Enter Signal Color","red, yellow, green only");
// if (signalColor === "Red" || signalColor === "red") {
//     document.write("<span style = 'font-weight: bold; padding: 10px; Font-size: 40px; color: rgb(46, 116, 181); background-color: rgb(222, 234, 246);'>Must Stop</span>");
// }else if (signalColor === "Yellow" || signalColor === "yellow") {
//     document.write("<span style = 'font-weight: bold; padding: 10px; Font-size: 40px; color: rgb(46, 116, 181); background-color: rgb(222, 234, 246);'>Ready to move</span>");
// }else if (signalColor === "Green" || signalColor === "green") {
//     document.write("<span style = 'font-weight: bold; padding: 10px; Font-size: 40px; color: rgb(46, 116, 181); background-color: rgb(222, 234, 246);'>Move now</span>");
// }else {
//     document.write("Try Again!... Only Enter These Colors: Red, Yellow, Green" + "<table style = 'color: rgb(46, 116, 181); padding-bottom: 40px; border-top: solid 2px rgb(46, 116, 181); border-bottom: solid 2px rgb(46, 116, 181); font-size: 40px; margin-left: 40px;'><tr><th><center>Signal color</center></th> <th style = 'padding-left: 80px;'><center> Message</center></th></tr> <br> <tr style = 'background-color: rgb(222, 234, 246);'><td style = 'border-top: solid 2px rgb(46, 116, 181);'><center>Red</center></td> <td style = 'padding-left: 80px; border-top: solid 2px rgb(46, 116, 181);'><center>Must Stop</center></td></tr> <br> <tr><td><center>Yellow</center></td> <td style = 'padding-left: 80px;'><center>Ready to move</center></td></tr> <br> <tr style = 'background-color: rgb(222, 234, 246);'><td><center>Green</center></td> <td style = 'padding-left: 80px;'><center>Move now</center></td></tr> <br> <tr><td></td><td></td></tr> <br> </table>")
// }

// // task 4
// var fuel = +prompt("Enter Remaining Fuel in liters");
// if (fuel < 0.25) {
//     document.write("<h1 style = 'font-size: 40px;'>Please refill the fuel in your car</h1>")
// }else {
//     document.write("<h1 style = 'font-size: 40px;'>No Need to refill now</h1>");
// }

// // task 5
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
//     //condition true
// }

// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true");
//     //condition not true
// }

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } if (c === 13){ 
//     alert("condition 2 is true"); 
// } if (++c < 14){ 
//     alert("condition 3 is true"); 
// } if(c === 14){ 
//     alert("condition 4 is true"); 
//     //condition 2 and 4 is true
// }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//     //condition true
// }

// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
//     //condition true
// }

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     //condition true
// }

// // task 6
// document.write("<h1>Marks Sheet</h1>" + "<br>" + "<br>" + "<br>");
// var subMarks1 = +prompt("Enter 1st Subject Obtainded Marks");
// var subMarks2 = +prompt("Enter 2nd Subject Obtainded Marks");
// var subMarks3 = +prompt("Enter 3rd Subject Obtainded Marks");
// var totalMarksIs = +prompt("Please Enter Total Marks");
// var sum = subMarks1 + subMarks2 + subMarks3;
// var percentage = sum / totalMarksIs * 100;
// document.write("Total marks : " + totalMarksIs + "<br>");
// document.write("Marks obtained : " + sum + "<br>");
// document.write("Percentage : " + percentage + "%" + "<br>");
// if (percentage >= 80) {
//     document.write("Grade : A-one" + "<br>");
//     document.write("Remarks : Excellent" + "<br>");
// }else if (percentage >= 70) {
//     document.write("Grade : A" + "<br>");
//     document.write("Remarks : Good" + "<br>");
// }else if (percentage >= 70) {
//     document.write("Grade : A" + "<br>");
//     document.write("Remarks : Good" + "<br>");
// }else if (percentage >= 60) {
//     document.write("Grade : B" + "<br>");
//     document.write("Remarks : You need to improve" + "<br>");
// }else if (percentage < 60) {
//     document.write("Grade : Fail" + "<br>");
//     document.write("Remarks : Sorry" + "<br>");
// }else {
//     document.write("You entered wrong figures.")
// }

// // task 7
// var guess = +prompt("Enter a Number Range: 1 to 10");
// var secretNum = 8;
// if (guess === secretNum) {
//     document.write("Bingo! Correct answer");
// }else if (guess === secretNum + 1) {
//     document.write("Close enough to the correct answer");
// }else if (guess === secretNum - 1) {
//     document.write("Close enough to the correct answer");
// }else {
//     document.write("Better Luck Next Time");
// }

// // task 8
// var num = +prompt("Enter Number");
// if (num % 3 === 0) {
//     document.write("Number is divisible by 3");
// }else {
//     document.write("Number is not divisible by 3");
// }

// // task 9
// var num = +prompt("Enter Number");
// if (num % 2 === 0) {
//     document.write("Your given number is Even");
// }else {
//     document.write("Your given number is Odd");
// }

// // task 10
// var temp = +prompt("Enter Today's Temprature");
// if (temp >= 40) {
//     document.write("It is too hot outside.");
// }else if (temp >= 30) {
//     document.write("The Weather today is Normal.");
// }else if (temp >= 20) {
//     document.write("Today’s Weather is cool.");
// }else if (temp >= 10) {
//     document.write("OMG! Today’s weather is so Cool.");
// }else {
//     document.write("Snow Fall Starts Now");
// }

// // task 11
// var num1 = +prompt("Enter 1st Number");
// var operator = prompt("Enter Operator: + - * / %")
// var num2 = +prompt("Enter 2nd Number");
// if (operator === "+") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 + num2));
// }else if (operator === "-") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 - num2));
// }else if (operator === "*") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 * num2));
// }else if (operator === "/") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 / num2));
// }else if (operator === "%") {
//     document.write(num1 + " " + operator + " "  + num2 + " = " + (num1 % num2));
// }else {
//     document.write("Operator Error");
// }

//                                            // Chapter 12-13

// // task 1
// var userInput = prompt("Enter a Character: Numaric or A to Z");
// if (userInput >= "A" && userInput <= "Z") {
//     document.write(userInput + " is a Upper Case Letter");
// }else if (userInput >= "a" && userInput <= "z") {
//     document.write(userInput + " is a Lower Case Letter");
// }else if (userInput >= 0) {
//     document.write(userInput + " is a Number");
// }else {
//     document.write(userInput + " is a not defined");
// }

// // task 2
// var num1 = +prompt("Please enter 1st integer");
// var num2 = +prompt("Please enter 2nd integer");
// if (num1 > num2) {
//     document.write("Number 1 is: " + num1 + " and Number 2 is: " + num2 + " So " + num1 + " is larger");
// }else if (num2 > num1) {
//     document.write("Number 1 is: " + num1 + " and Number 2 is: " + num2 + " So " + num2 + " is larger");
// }else if (num1 === num2) {
//     document.write("Number 1 is: " + num1 + " and Number 2 is: " + num2 + " So " +  num1 + " and " + num2 + " both are equals");
// }else {
//     document.write("Number not found");
// }

// // task 3
// var userInput = +prompt("Enter a Number");
// if (userInput >= +1) {
//     document.write("Number is positive");
// }else if (userInput <= -1) {
//     document.write("Number is negative");
// }else if (userInput === 0) {
//     document.write("Number is Zero");
// }

// // task 4
// var char = prompt("Enter vowel letter");
// char = char.toLocaleLowerCase()
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     document.write("True")
// }else {
//     document.write("False")

// }

// // task 5
// var password = 123456;
// var userInput = +prompt("Enter your Password");
// if (userInput == "") {
//     document.write("Please Enter your Password");
// }else if (userInput === password) {
//     document.write("Correct! The password you entered matches the original password");
// }else if (userInput !== password) {
//     document.write("Incorrect password");
// }

// // task 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     greeting = document.write("Good day"); 
// }
// else {
//     greeting = document.write("Good evening"); 
// }

// // task 7
// var time = +prompt("Enter Time like: 0000 to 2359");
// if (time >= 0000 && time < 1200) {
//     document.write("Good morning")
// }else if (time >= 1200 && time < 1700) {
//     document.write("Good afternoon")
// }else if (time >= 1700 && time < 2100) {
//     document.write("Good evening")
// }else if (time >= 2100 && time <= 2359) {
//     document.write("Good night")
// }

//                                            // Chapter 14-16

// // task 1
// var arr = [];

// // task 2
// var arr1 = new Array();

// // task 3
// var arr = ["Zubair", "Afzal"];

// // task 4
// var arr = [1, 2];

// // task 5
// var arr = [true];

// // task 6
// var arr = ["Name", 2, true];

// // task 7
// var arr = ["Qualifications:  <br> <br>", "1) SSC <br>", "2) HSC <br>", "3) BSC <br>", "4) BS <br>", "5) BCOM <br>", "6) MS <br>", "7) M.Phil <br>", "8) PhD <br>"];
// document.write(arr.join(""));

// // task 8
// var arr = [];
// arr[0] = prompt("Enter 1st Student");
// arr[1] = prompt("Enter 2nd Student");
// arr[2] = prompt("Enter 3rd Student");
// var arr1 = [];
// arr1[0] = prompt("Enter 1st Student Score. Total Marks: 500");
// arr1[1] = prompt("Enter 2nd Student Score. Total Marks: 500");
// arr1[2] = prompt("Enter 3rd Student Score. Total Marks: 500");
// var totalMarks = 500;
// var percentage = arr1[0] / 500 * 100;
// var percentage1 = arr1[1] / 500 * 100;
// var percentage2 = arr1[2] / 500 * 100;
// document.write("Score of " + arr[0] + " is " + arr1[0] + "." + " Percentage: " + percentage + "%" + "<br>");
// document.write("Score of " + arr[1] + " is " + arr1[1] + "." + " Percentage: " + percentage1 + "%" + "<br>");
// document.write("Score of " + arr[2] + " is " + arr1[2] + "." + " Percentage: " + percentage2 + "%" + "<br>");

// // task 9
// var arr =["Red ", " Green", " Blue"];
// document.write(arr.join("") + "<br>" + "<br>");

// var userInput = prompt("what color you wants to add to the beginning");
// arr.unshift(userInput + " ");
// document.write(arr.join(""));

// var userInput = prompt("what color you wants to add to the end");
// arr.push(" " + userInput);
// document.write(arr.join(""));

// arr.unshift("White ", " Yellow ");
// document.write(arr.join(""));

// arr.shift();
// document.write(arr.join(""));

// arr.pop();
// document.write(arr.join(""));

// var userInd = +prompt("which index you wants to add a color");
// var userInd1 = +prompt("How many colors you wants to add");
// var userInput = " " + prompt("Enter color / colors you wants to add") + " ";
// if (userInd === 0 && userInd1 >= 1) {
//     arr.splice(userInd, arr[0] + userInd1, userInput);
//     document.write(arr.join(""));
// }else if (userInd === 1 && userInd1 >= 1) {
//     arr.splice(userInd, arr[1] + userInd1, userInput);
//     document.write(arr.join(""));
// }else if (userInd === 2 && userInd1 >= 1) {
//     arr.splice(userInd, arr[2] + userInd1, userInput);
//     document.write(arr.join(""));
// }else if (userInd === 3 && userInd1 >= 1) {
//     arr.splice(userInd, arr[3] + userInd1, userInput);
//     document.write(arr.join(""));
// }else {
//     document.write("Please Enter Index Range: 0 to 3");
// }

// var userInd = +prompt("which index you wants to add a color");
// var userInd1 = +prompt("How many colors you wants to add");
// if (userInd === 0 && userInd1 >= 1) {
//     arr.splice(userInd, userInd1);
//     document.write(arr.join(""));
// }else if (userInd === 1 && userInd1 >= 1) {
//     arr.splice(userInd, userInd1);
//     document.write(arr.join(""));
// }else if (userInd === 2 && userInd1 >= 1) {
//     arr.splice(userInd, userInd1);
//     document.write(arr.join(""));
// }else {
//     document.write("Please Enter Index Range: 0 to 3");
// }

// // task 10
// var arr = [320, 230, 480,120];
// document.write("Scores of Students : " + arr + "<br>" + "<br>");
// arr.sort();
// document.write("Ordered Scores of Students : " + arr + "<br>" + "<br>");

// // task 11
// var arr = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list: <br>" + arr + "<br>" + "<br>");
// document.write("Selected cities list: <br>" + arr.slice(2, 4) + "<br>" + "<br>");

// // task 12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array: <br>" + arr + "<br> <br>");
// document.write("String: <br>" + arr.join(""));

// // task 13
// var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
// document.write("Devices: <br>" + arr + "<br> <br>");
// document.write("Out: <br>" + arr.slice(0, 1) + "<br>");
// document.write("Out: <br>" + arr.slice(1, 2) + "<br>");
// document.write("Out: <br>" + arr.slice(2, 3) + "<br>");
// document.write("Out: <br>" + arr.slice(3, 4));

// // task 14
// var arr = ["keyboard ", "mouse ", "printer ", "monitor"];
// document.write("Devices: <br>" + arr + "<br> <br>");
// document.write("Out: <br>" + arr.slice(3, 4) + "<br>");
// document.write("Out: <br>" + arr.slice(2, 3) + "<br>");
// document.write("Out: <br>" + arr.slice(1, 2) + "<br>");
// document.write("Out: <br>" + arr.slice(0, 1));

// // task 15
// var arr = ["Apple", " Samsung", " Motorola", " Nokia", " Sony", " Haier"];
// document.write("<select><option>" + "Select" + "</option> <option>" + arr[0] + "</option> <option>" + arr[1] + "</option> <option>" + arr[2] + "</option> <option>" + arr[3] + "</option> <option>" + arr[4] + "</option> <option>" + arr[5] + "</option></select>");

//                                            // Chapter 17-20

// // task 1
// var multiArr = [[ ], [ ]];

// // task 2
// var multiArr = [[0 + " ", 1 + " ", 2 + " ", 3].join("") + "<br>", [1 + " ", 0 + " ", 1 + " ", 2].join("") + "<br>", [2 + " ", 1 + " ", 0 + " ", 1].join("")];
// document.write(multiArr.join(""));

// // task 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// // task 4
// var table = +prompt("Enter a number to show its multiplication table");
// var leng = +prompt("Enter length multiplication table");
// document.write("Multiplication table of " + table + "<br>");
// document.write("Length " + leng + "<br> <br>");
// for (var i = 1; i <= leng; i++) {
//     document.write(table + " x " + i + " = " + table*i + "<br>");
// }

// // task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry <br>"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// for (var j = 0; j < fruits.length; j++) {
//     document.write("Element at index " + j + " is " + fruits[j] + "<br>");
// }

// // task 6
// document.write("<h1>Counting:</h1>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<h1>Reverse counting:</h1>")
// for (var j = 10; j >= 1; j--) {
//     document.write(j + ", ");
// }
// document.write("<h1>Even:</h1>")
// for (var k = 0; k <= 20; k++ + k++) {
//     document.write(k + ", ");
// }
// document.write("<h1>Odd:</h1>")
// for (var l = 1; l < 20; l++ + l++) {
//     document.write(l + ", ");
// }
// document.write("<h1>Series:</h1>")
// for (var m = 2; m <= 20; m++ + m++) {
//     document.write(m + "k, ");
// }

// // task 7
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }

// // task 8
// var arr = [24, 53, 78, 91, 12];
// document.write("Array items: " + arr + "<br>");
// var large = Math.max.apply(Math, arr);
// document.write("The largest number is " + large);

// // task 9
// var arr = [24, 53, 78, 91, 12];
// document.write("Array items: " + arr + "<br>");
// var small = Math.min.apply(Math, arr);
// document.write("The smallest number is " + small);

// // task 10
// var num = 5;
// for (var i = 1; i <= 20; i++) {
//     if (num === 5) {
//         document.write(num * i + ", ");
//     }
// }