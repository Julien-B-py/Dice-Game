var diceN1 = Math.floor(Math.random() * 6) + 1;
var diceN2 = Math.floor(Math.random() * 6) + 1;

var imgP1 = document.querySelector(".img1");
imgP1.src = "images/Dice-" + diceN1 + ".png";

var imgP2 = document.querySelector(".img2");
imgP2.src = "images/Dice-" + diceN2 + ".png";

if (diceN1 > diceN2) {
  console.log("Player 1 wins");
} else if (diceN2 > diceN1) {
  console.log("Player 2 wins");
} else {
  console.log("Draw");
}
