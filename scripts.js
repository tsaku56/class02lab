"user strict";

let myUser = prompt("Hi, whats your name?");
console.log(myUser);

function myQuiz() {
  let userPoints = 0;

  let myQues = prompt(myUser + " do you want to read this, yes or no? Positivity will help your score!");
  if (myQues.toLowerCase() === "yes" || myQues.toLowerCase() === "y") {
    userPoints++;
    alert("You're too nice!");
  } else {
    //console.log("That's fair.");
    alert("I don't blame you.");
  }

  let myDrink = prompt("Do you like piña coladas, yes or no?");
  if (myDrink.toLowerCase() === "yes" || myDrink.toLowerCase() === "y") {
    userPoints++;
    alert("And getting caught in the rain! 💧");
  } else {
    //console.log("Then take an umbrella.");
    alert("Then take an umbrella.");
  }

  let myFood = prompt("Would you eat a cheese burger, yes or no?");
  if (myFood.toLowerCase() === "yes" || myFood.toLowerCase() === "y") {
    userPoints++;
    alert("Good answer, why not have two!");
  } else {
    //console.log("That's why you look so sad :(");
    alert("That's why you look so sad :(");
  }

  let myPai = prompt("Have you had enough of this yet, yes or no?");
  if (myPai.toLowerCase() === "yes" || myPai.toLowerCase() === "y") {
    alert("Tough luck.");
  } else {
    userPoints++;
    alert("You're made of the tough stuff!");
  }

  let myDon = prompt(myUser + " do you want to try this again, yes or no?");
  if (myDon.toLowerCase() === "yes" || myDon.toLowerCase() === "y") {
    userPoints++;
    alert("No, you're done.");
  } else {
    //console.log("Okay, I'll let you off.");
    alert("Okay, I'll let you off.");
  }

  const random = Math.floor(Math.random() * 10) + 1;
  let gameGuess = prompt("Guess a number between 1 to 10. You have 4 attempts.");
  for (let i = 3; i >= 0; i--) {
    if (i == 0) {
      alert("Better luck next time " + myUser + " it was " + random);
      break;
    }
    if (gameGuess < random) {
      alert("Too low, try again.");
      gameGuess = prompt("You now have " + i + " attempts left.");
    } else if (gameGuess > random) {
      alert("Too high, try again.");
      gameGuess = prompt("You now have " + i + " attempts left.");
    } else {
      userPoints++;
      alert("Congrats, you got it!");
      break;
    }
  }

  const breakList = ["coffee", "cereal", "toast"];
  console.log(breakList[0]);
  let myMulti = prompt("What do I like to have for breakfast?");
  for (let i = 5; i >= 0; i--) {
    if (i == 0) {
      alert("Better luck next time on the breakfast quiz " + myUser);
      break;
    }
    if (myMulti === breakList[0] || myMulti === breakList[1] || myMulti === breakList[2]) {
      userPoints++;
      alert("Well done! The answers are Coffee, Cereal, Toast!");
      break;
    } else {
      alert("Nope. Sorry. Try again!");
      myMulti = prompt("You now have " + i + " attempts left.");
    }
  }

  let uTotal = alert(myUser + " you scored a total of " + userPoints + " out of 7!");
  console.log(uTotal);

  let myMessage = "Welcome " + myUser + " you scored " + userPoints + " out of 7!";

  const demo = (document.getElementById("userName").innerHTML = myMessage);
}
myQuiz();
