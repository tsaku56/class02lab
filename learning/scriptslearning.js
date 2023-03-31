// extra prep work for functions

"user strict";
// make console.log at work to make sure out script is working at begining
console.log("boooyaaa");
// to declare function, place name followed by parenthsis then the logic in {}
function sayHello() {}
// can also start a function through a variable.
const myName = function () {};
// invoking the function
sayHello();

sayGoodBye("Neo");
sayGoodBye("Tim");

//function has 2 parameters which returns as an argumenet
function getFullName(firstName, secondName) {
  return firstName + "String" + secondName;
}

let ada = getFullName("ada", "lovelace");

console.log("ada:" + ada);
//the console.log

//set up a prompt function to able to have a result otherwise will be an error in response.

// function is aimed at looping code without having to DRY code too far.
function yesOrNoPrompt(prompInfo) {
  let userInput = prompt(promptInfo);
}
if (userInput === "yes") {
  console.log("Hurray");
} else if (userInput === "no") {
  console.log("boo");
} else if (userInput === "maybe") {
  console.log("maybe");
} else {
  console.log("Incorrect message");
}

yesOrNoPrompt("yes or not");
yesOrNoPrompt("how about yes");

// bad example, will not read this outside of function.
userInput = Ross;
console.log(userInput);
// this console logs the function process itself!
console.log(yesOrNoPrompt);
