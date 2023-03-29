"use strict";

let myUser = prompt("Hi, whats your name?");
console.log(myUser);
/* 5 prompts */
let myWho = prompt("Are you friend?");
console.log(myWho);

let myInt = prompt("Are you trying to read me?");
console.log(myInt);

let myWha = prompt("Yes or no?");
console.log(myWha);

let myCon = prompt("Are you a robot?");
console.log(myCon);

let myRes = prompt("Ok " + myUser + " blah blah");
console.log(myRes);

const demo = (document.getElementById("userName").innerHTML = myUser);

let answer1 = confirm("Are you ready to read?");

if (answer1 === true) {
  /* using a backslash is incase the code doesn't read properly for phrases */
  console.log("Let's Get Ready to Read");
} else {
  console.log("Better luck next time");
}

let first = true;
let second = false;
let third = true;

/* doulbe && means if answer is 'and' both values then prompt this */
/* if contradicts, it will skip past it i.e. adding false into this */
/* pipes || does refers to either/or */
if (first && third) {
  console.log("first and third are both true");
} else if (first || second) {
  console.log("first or third was true!");
} else if (third) {
  console.log("first and second were false!");
} else {
  console.log("Were any of variables true?");
}

/* switch statement */

let color = prompt("What is your favourite colour?");

switch (color.toLowerCase()) {
  case "red":
    console.log("Your favourite colour is red!");
    /* if condition is met, it'll break the run */
    break;
  case "blue":
    console.log("Your favourite is blue");
    break;
  case "purple":
    console.log("Your favourite is purple");
    break;
  default:
    console.log("I don't know what it is!");
    break;
}

/** example */

let cran = prompt("You safe?");
if (cran.toLowerCase() === "yes" || cran.toLowerCase() === "y") {
  //console.log("you're right");
  alert("you're right");
} else {
  //console.log("Youre wrong");
  alert("Youre wrong");
}

/** .toUpperCase() .toLowerCase() - makes the the answer conform into either lower or upper case */
