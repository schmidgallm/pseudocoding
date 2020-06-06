// STEP 1
// Gather all options into array to choose from

// Step 2
// Init state to hold games wins and losses and ites

// STEP 3
// Get users choice

// STEP 4
// Get random choice from pc

// SETP 5
// Compare inputs and determine winner

// Step 6
// Add win, loss, or tie to state

// Step 7
// Output results to the DOM

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

/*
// STEP 1
// Init array to hold all option
*/
const computerChoices = ['r', 'p', 's'];

/*
// STEP 2
// Init state
*/

const state = {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*
// STEP 3 - 5 captured with event key
// User choice - captured by key event
*/
document.onkeyup = function (event) {
  // STEP 3
  // Get user choice and check if its not "p" or "s" or "r"
  const userGuess = event.key;

  // STEP 4
  // pc choice captured by random iterator of computer choices array from step 1
  const computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // SETP 5 & 6
  // Compare inputs and determine winner and add to game score state
  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
    if (userGuess === 'r' && computerGuess === 's') {
      state.wins++;
    } else if (userGuess === 'r' && computerGuess === 'p') {
      state.losses++;
    } else if (userGuess === 's' && computerGuess === 'r') {
      state.losses++;
    } else if (userGuess === 's' && computerGuess === 'p') {
      state.wins++;
    } else if (userGuess === 'p' && computerGuess === 'r') {
      state.wins++;
    } else if (userGuess === 'p' && computerGuess === 's') {
      state.losses++;
    } else if (userGuess === computerGuess) {
      state.ties++;
    }

    // Step 7
    // Output results to DOM
    const html =
      '<p>You chose: ' +
      userGuess +
      '</p>' +
      '<p>The computer chose: ' +
      computerGuess +
      '</p>' +
      '<p>wins: ' +
      state.wins +
      '</p>' +
      '<p>losses: ' +
      state.losses +
      '</p>' +
      '<p>ties: ' +
      state.ties +
      '</p>';

    document.querySelector('#game').innerHTML = html;
  }
};
