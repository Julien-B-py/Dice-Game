// Create a HTMLAudioElement containing the sound effect and store it in a variable
var rollSound = new Audio("audio/roll.mp3");

// Generate two random numbers then display the values and the winner
function rollDice() {

  // Generate two random numbers between 1 and 6 and store in variables
  var diceN1 = Math.floor(Math.random() * 6) + 1;
  var diceN2 = Math.floor(Math.random() * 6) + 1;

  // Store requested css selectors in variables
  var imgP1 = document.querySelector(".img1");
  var imgP2 = document.querySelector(".img2");

  // Set the src attribute to display the corresponding image based on dice value
  imgP1.src = "images/Dice-" + diceN1 + ".png";
  imgP2.src = "images/Dice-" + diceN2 + ".png";

  // Create a variable to store the winner
  var winner;
  // Compare dice values and adjust winner value depending on the result
  if (diceN1 > diceN2) {
    winner = "Player 1 wins!";
  } else if (diceN2 > diceN1) {
    winner = "Player 2 wins!";
  } else {
    winner = "Draw!";
  }

  /* Get h2 element then set the textContent property to be equal to the string defined above */
  var winnerTxt = document.querySelector("h2");
  winnerTxt.textContent = winner;
}

// Add an EventListener to the whole web page to detect when a key is pressed
document.addEventListener("keydown", function(event) {
  // If space key is pressed then
  if (event.key === " ") {
    // Check if the Audio object property paused is True
    if (rollSound.paused) {
      // If paused play the Audio
      rollSound.play();
    } else {
      // If not paused adjust the current playback time to zero to force the restart
      rollSound.currentTime = 0;
    }
    // Run rollDice function
    rollDice();
  }
});
