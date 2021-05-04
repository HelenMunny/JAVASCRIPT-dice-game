
// random number for player 1
let randomNum1 = Math.floor(Math.random() * 6) + 1;

let randomDice = "dice" + randomNum1 + ".png";

let randomImgSource = "images/" + randomDice;

let player1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);


// random number for player 1
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomDice2 = "dice" + randomNum2 + ".png";

let randomImgSource2 = "images/" + randomDice2;

let player2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);


// game results declaration
if (randomNum1 > randomNum2) {
 document.querySelector("h1").innerHTML = "Player 1 Wins!";
 document.querySelector("h1").style.color = "rgb(56, 145, 17)";
} else if (randomNum2 > randomNum1) {
 document.querySelector("h1").innerHTML = "Player 2 Wins!";
 document.querySelector("h1").style.color = "rgb(13, 15, 134)";
} else if (randomNum1 === randomNum2){
 document.querySelector("h1").innerHTML = "Game Draw!";
 document.querySelector("h1").style.color = "red";
};


