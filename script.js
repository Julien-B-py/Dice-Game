// Create a HTMLAudioElement containing the sound effect and store it in a variable
var rollSound = new Audio("audio/roll.mp3");
// Initialize shuffleCount to 1 to simulate dice shuffle
var shuffleCount = 0;

// Dice rolling function.
// Loop 5 times to simulate dice shuffle then keep the 2 random numbers generated during the 5th loop run.
// Finally display final dice values and the winner.
function rollDice() {

  // Reset winner text if h2 is not an empty string
  if ($("h2").text !== "") {
    $("h2").text("");
  }

  //  Perform the function inside setTimeout after 100 ms
  setTimeout(function() {

    // Generate two random numbers between 1 and 6 and store in variables
    var diceN1 = Math.floor(Math.random() * 6) + 1;
    var diceN2 = Math.floor(Math.random() * 6) + 1;

    // Select images and set the src attribute to display the corresponding image based on dice value
    $(".img1").attr("src", "images/Dice-" + diceN1 + ".png");
    $(".img2").attr("src", "images/Dice-" + diceN2 + ".png");

    // Increment shuffle counter
    shuffleCount++;

    // If shuffle counter is less than five, call rollDice function again
    if (shuffleCount < 5) {
      rollDice();
    }
    // If suffle counter >= 5, we consider dice are rolling.
    else {
      // Reset suffle counter value for future runs
      shuffleCount = 0;
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

      // Set the h2 text to be equal to the winner string determined above
      $("h2").text(winner);
    }

  }, 100);

}


// Add a "keydown" handler to the whole page to detect keyboard inputs
$(document).keydown(function(event) {
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
