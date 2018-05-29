console.log("How can we comment out code?");
console.log("Using // comments out code.")
console.log("What happens when we run code that is commented out?");
console.log("Nothing happens!")
console.log("What are the differences between the alert(), confirm(), and prompt() functions in JavaScript?");
console.log("Alert() undefinded return value, information to the user. Confirm returns boolean value(true/false). Prompt() returns a string. All take strings as arguments.")
console.log("use alert() to pop up a dialog box with a warning for the user");
console.log(alert("Hello"));
console.log("Use confirm() to ask a yes or no question.");
console.log(confirm("Are you alive?"));
console.log("Use prompt() to ask a question.");
console.log(prompt("Enter Date"));
console.log("Save the response to the prompt() as a variable. All responses entered by a user in to a prompt input filed are saved as strings (even if the user enters 10, the value is saved as the string, "10"). Run at least 3 string methods of your choice on the string variable that you create from the prompt.");
var promptResponse = prompt("Enter Date");
console.log(promptResponse.toUpperCase());
console.log(prompt("Enter Weekday"));
var promptWeekday = prompt("Enter Weekday");
console.log(promptWeekday.toLowerCase());
var promptEpicodus = prompt("Enter week at Epicodus?");
console.log("Ask a new question and save the response as a new variable and run 3 different string methods on it.");
console.log(promptEpicodus.toUpperCase() + " " + "Nice Job!");
console.log("Congrats," + " " + promptEpicodus.toLowerCase() + " " + "is a good run.");
console.log(promptEpicodus.charAt(0) + promptEpicodus.charAt(1) + promptEpicodus.charAt(2));
