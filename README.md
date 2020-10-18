# War Card Game Project 01:

# Description:
### In the War card game, a deck of 52 playeing cards is split in half and distributed to two players. The cards are placed face down and both players reveal their respective top card. The higher of the two cards wins, and the owner of the card takes their winning card and the opponent's losing card and places them at the bottom of their deck. In the event of a tie, (both cards have the same value) "War" is initiated. During war, one card is place face down per player ad then one face up. The player with the higher card wins (ties repeat). The game ends once a player accumulates all 52 cards.

# Deployment Link: (http://war-were-declared-4.surge.sh)

# Images:
![War Card Game Project Wireframe](images/warFrame.png)
![01](images/shot.png)
![02](images/shot2.png)

# Technologies:
- HTML
- CSS
- JavaScript
- getbootstrap.com
- freesounds.org
- animate.css

# Pseudocode Outline:

## Start-Up State:
> Initial Array containing 52 numbers (4x 2 to 14).

Math.floor and Math.random and distribution function to randomly order and divide the array.

>Set up two arrays, to contain 26 (half of 52) numbers ranging from 2 to 14 (Jack, Queen, King, Ace 11 to 14).

## Button Press:
>Initiates comparison of INDEX 0 of ARRAYS 01 between both players (initial comparison is null?).

Shows next pair in INDEX 0 (new cards).

>Winning / losing pair gets placed into winner's original array's end so it adapts to arrays with different amouts of numbers in them (imitating putting the cards at the bottom of the deck).

## Functions (Other):
>WAR: If a tie senario, the next INDEX 0 numbers are not compared, then runs standard INDEX 0 number comparison.

## End State:
>Game ends once a player accumulates all of the numbers (cards) OR player has an empty ARRAY.

# Detailed Pseudocode:
>startArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
 
FUNCTION 00: INIT: Game starts with cards faced down view and prompt players to start game (star / reset button).
 
>FUNCTION 00.5: start / reset populates player card arrays with half of 52 cards from init array, randomized by  Math.floor and Math.random, providing index 0 for comparison (NOTE: Mechanics include display of index 0, then NEW CARD button initiates FUNCTION 2, compare, sort, and new card render.).
 
FUNCTION 02: INDEX 0 COMPARE: compareCard(): Compare index 0 of player 1 and 2 arrays.
  - WIN PLAYER 1: If index 0 of player 1 > player 2:        
    - Push winning number, then losing number to end of player 1 array (in order).
  - WIN PLAYER 2: If index 0 of player 1 < player 2:
    - Push winning number, then losing number to end of player 2 array (in order).
  - TIE: resolve FUNCTION 01.
    - If either player's index 0 === null, game ends, other player winner.
  - Call FUNCTION 03.
 
>FUNCTION 01: WAR: warCon(): If index 0 of player 1 array === index 0 of player 2 array, execute:
  >- Option 01: Skip comparison of next numbers to be loaded into index 0 for comparison in both arrays and load numbers after that OR Option 02: compare index 1 numbers.
  >- Option 01 (ONLY): Store skipped cards in "holding" array (warArray perhaps?).
  >- FUNCTION 02 to decide winner AND "payout" of "holding" array to winner.
    >- Order of "payout" of numbers / cards: winner revealed card, loser revealed card, winner "holding" array acending order (index 0, then 1...)
   If tie, repeat FUNCTION 01.
 
FUNCTION 03: RENDER TURN: newCards(): Display corresponding, index 0 cards on top of both player card piles.

# Stretch Goals:
>Improve visual design.

Supersonic Match Button: Iniates automated match at calculation speed and renders winner.

>Create two piles (draw and compare piles) instead of one.

# Resources and References:
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
// https://www.youtube.com/watch?v=myL4xmtAVtw
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// https://animate.style/
// https://stackoverflow.com/questions/39690321/how-to-select-all-items-in-array-at-once-and-add-class-to-them
// https://www.pixilart.com/art/space-invaders-ship-b32c69e04d7d64f
// https://www.w3schools.com/css/css_positioning.asp
// https://freesound.org/people/MikeE63/sounds/466834/
// https://freesound.org/people/cydon/sounds/268557/
// https://freesound.org/people/TolerableDruid6/sounds/458416/
// https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
 



