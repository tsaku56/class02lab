"user strict";

let myUser = prompt("Hi, whats your name?");
console.log(myUser);

let myMessage = "Welcome " + myUser + " !";

const demo = (document.getElementById("userName").innerHTML = myMessage);

let myQues = prompt("Do you want to read this?");
if (myQues.toLowerCase() === "yes" || myQues.toLowerCase() === "y") {
  //console.log("That's surprising!");
  alert("You're too nice!");
} else {
  //console.log("That's fair.");
  alert("I don't blame you.");
}

let myDrink = prompt("Do you like piña coladas?");
if (myDrink.toLowerCase() === "yes" || myDrink.toLowerCase() === "y") {
  //console.log("Getting caught in the rain!");
  alert("And getting caught in the rain!");
} else {
  //console.log("Then take an umbrella.");
  alert("Then take an umbrella.");
}

let myFood = prompt("Would you eat a cheese burger?");
if (myFood.toLowerCase() === "yes" || myFood.toLowerCase() === "y") {
  //console.log("Good answer, why not have two!");
  alert("Good answer, why not have two!");
} else {
  //console.log("That's why you look so sad :(");
  alert("That's why you look so sad :(");
}

let myPai = prompt("Had enough yet?");
if (myPai.toLowerCase() === "yes" || myPai.toLowerCase() === "y") {
  //console.log("Tough luck.");
  alert("Tough luck.");
} else {
  //console.log("You're made of the tough stuff!");
  alert("You're made of the tough stuff!");
}

let myDon = prompt(myUser + " want to try this again?");
if (myDon.toLowerCase() === "yes" || myDon.toLowerCase() === "y") {
  //console.log("No, you're done.");
  alert("No, you're done.");
} else {
  //console.log("Okay, I'll let you off.");
  alert("Okay, I'll let you off.");
}
