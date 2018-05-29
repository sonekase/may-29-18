console.log("How do we call a function?");
console.log("Entering the function name followed by any arguments needed.");
console.log("What is a parameter, and how do we provide one to a function?");
console.log("Parameter is the arguments used to support the functions.");
console.log("What is a return value? How do we tell our functions what value to return?");
console.log("A return value is any response to a variable or function. By including the return statement within the function/method.");
console.log("When do we need to parse integers?");
console.log("When converting data types.");
console.log("What function is responsible for parsing integers?");
console.log("parseInt()");
console.log("Take somebody's name and say a greeting to them;");
var namedPrompt = promt("Whats your name?");
console.log(alert("Hello, " + namedPrompt + "!"));
console.log("Write a function to subtract two numbers;");
var subtracted = function subtract(num1, num2) {
  console.log(num1 - num2);
  return num1 - num2;
};
console.log("Now one to multiply two numbers. Then create a new function called threeTimes to multiply three numbers together.");
var num1 = prompt("Pick your first number?");
var num2 = prompt("Pick your second number?");
var num3 = prompt("Pick your third number?");
var multiply = num1 * num2;
function threeTimes(numb1, numb2, numb3) {
	console.log(numb1 * numb2 * numb3);
  return numb1 * numb2 * numb3;
};
console.log(multiply);
console.log(threeTimes(num1, num2, num3))
threeTimes(num1, num2, num3);

console.log("Now write one to divide two numbers. Then write a new function called remainder to find the remainder of two numbers.");
function divide(num1, num2) {
  console.log(num1 / num2);
  return num1 / num2;
};
divide(num1, num2);
console.log(divide(num1, num2));

function remainder(num1, num2) {
  console.log(num1%num2);
  return num1 % num2;
}
remainder(num1, num2);
console.log(remainder(num1, num2));
console.log("Prompt the user to enter their age, another prompt to enter their name and another prompt to enter their favorite food. Pass these as arguments to a function that returns a sentence combining all of this information. Then display the returned string with an alert.");
var name = prompt("What is your name?");
var age = prompt("What is your age?");
var food = prompt("What is your favorite food?");
function welcomeStatement(name, age, food) {
  console.log("Hello, " + name + "." + " " + "You are " + age + "years old." + " Your favorite food is " + food);
  return "Hello, " + name + "." + " " + "You are " + age + "years old." + " Your favorite food is " + food;
}
console.log(welcomeStatement(name, age, food));
welcomeStatement(name, age, food);
