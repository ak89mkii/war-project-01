/*------Constants------*/


/*------Variables (state)------*/
// Variables might include (board/turn/winner)


/*------Cached Element References------*/
// You might choose to put your game status here.


/*------Event Listeners------*/
// This is where you should put the event listener
// for a mouse-click


// ADDEVENTLISTENER:


// ADDEVENTLISTENER:


/*------Functions------*/


// FUNCTION 00: INIT: Game starts with cards faced down view and prompt players to start game (star / reset button).
// FUNCTION 00.5: start / reset populates player card arrays with half of 52 cards from init array, randomized by  Math.floor and Math.random, providing index 0 for comparison (NOTE: Mechanics include display of index 0, then NEW CARD button initiates FUNCTION 2, compare, sort, and new card render.).



// FUNCTION 01: WAR: warCon(): If index 0 of player 1 array === index 0 of player 2 array, execute:
    // Option 01: Skip comparison of next numbers to be loaded into index 0 for comparison in both arrays and load numbers after that OR Option 02: compare index 1 numbers.
    // Option 01 (ONLY): Store skipped cards in "holding" array (warArray perhaps?).
    // FUNCTION 02 to decide winner AND "payout" of "holding" array to winner.
        // Order of "payout" of numbers / cards: winner revealed card, loser revealed card, winner "holding" array acending order (index 0, then 1...)
    // If tie, repeat FUNCTION 01.


// FUNCTION 02: INDEX 0 COMPARE: compareCard(): Compare index 0 of player 1 and 2 arrays.
    // WIN PLAYER 1: If index 0 of player 1 > player 2:
        // Push winning number, then losing number to end of player 1 array (in order).
    // WIN PLAYER 2: If index 0 of player 1 < player 2:
        // Push winning number, then losing number to end of player 2 array (in order).
    // TIE: resolve FUNCTION 01.
    // If either player's index 0 === null, game ends, other player winner.
    // Call FUNCTION 03.


// FUNCTION 03: RENDER TURN: newCards(): Display corresponding, index 0 cards on top of both player card piles.
    // WIN PLAYER 1: Display text and/or animation indicating win.
    // WIN PLAYER 2: Display text and/or animation indicating win.
    // TIE: RENDER WAR: Displays face down card (timing about 1 second), then show new index 0 cards (FUNCTION 01 will skip the facedown card array equivalent).


// Basic Game Mechanics:


// Other Things to Consider:
// Some functions you might choose to use:


// Initialization function:
// Where you set your initial state, setting up
// what the board will look like upon loading
// On-Click function:


// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is