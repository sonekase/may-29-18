
//Addition Script
var add = function(number1, number2) {
  return number1 + number2;
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another one:"));
var resultAdd = add(number1, number2);
alert(resultAdd);

//BMI Calculator

var bmiHeight = parseFloat(prompt("What is your Height"));
var bmiWeight = parseInt(prompt("What is your Weight"));
function bmi(bmiHeight, bmiWeight) {
  return bmiWeight / bmiHeight;
}

alert(bmi(bmiHeight, bmiWeight));

//Temp Conversion

alert("Let's convert F to C.")
var f = prompt("How many degrees(f)?");
function convertTemp(f) {
  return ((f - 32) * 0.5556);
};

alert(convertTemp(f));
