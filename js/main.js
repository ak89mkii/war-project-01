/*------Constants------*/
function init() {
startArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
}
// function init() {
//     deckImages = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
// }
init()


const startDeck = randomizeDeck(startArray);

const makeHalfDeck = startDeck.splice(0, 52);


/*------Variables (state)------*/
// Variables might include (board/turn/winner)


let pOneDeck, ptwoDeck = []


/*------Cached Element References------*/
// You might choose to put your game status here.


const nextCard = document.getElementById("newCard");
const startSet = document.getElementById("reStart");
const p1Deck = document.getElementById("pOneDeck");
const p2Deck = document.getElementById("ptwoDeck");
const score = document.getElementById("message");


/*------Event Listeners------*/
// This is where you should put the event listener
// for a mouse-click


// ADDEVENTLISTENER: NEW CARD BUTTON: Initiates FUNCTION 2.
nextCard.addEventListener('click', function() {
    compareCard(pOneDeckNew[0], pTwoDeckNew[0]);
})

// ADDEVENTLISTENER: START / RESET BUTTON: Initiates FUNCTION 00.5.
startSet.addEventListener('click', function() {
    let start = "117"
    console.log(start)
})
    

/*------Functions------*/


// FUNCTION 00: INIT: Game starts with cards faced down view and prompt players to start game (star / reset button).


// FUNCTION 00.5: start / reset populates player card arrays with half of 52 cards from init array, randomized by  Math.floor and Math.random, providing index 0 for comparison (NOTE: Mechanics include display of index 0, then NEW CARD button initiates FUNCTION 2, compare, sort, and new card render.).

function randomizeDeck(arr) {
    let newPos,
        temp;
    for (let i = arr.length -1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
    }
    return arr;
}

function distDeck1() {
    let pOneDeck = []
    for (let i = 0; i < 26; i++) {
        pOneDeck.push(makeHalfDeck[i])
    }
    return pOneDeck;
}

function distDeck2() {
    let pTwoDeck = []
    for (let i = 26; i < 52; i++) {
        pTwoDeck.push(makeHalfDeck[i])
    }
    return pTwoDeck;
}


// FUNCTION 02: INDEX 0 COMPARE: compareCard(): Compare index 0 of player 1 and 2 arrays.
    // WIN PLAYER 1: If index 0 of player 1 > player 2:
        // Push winning number, then losing number to end of player 1 array (in order).
    // WIN PLAYER 2: If index 0 of player 1 < player 2:
        // Push winning number, then losing number to end of player 2 array (in order).
    // TIE: resolve FUNCTION 01.
    // If either player's index 0 === null, game ends, other player winner.
    // Call FUNCTION 03.

let pOneDeckNew = distDeck1();
let pTwoDeckNew = distDeck2();

console.log(pOneDeckNew, pTwoDeckNew);

function compareCard() {
    let splicedCardA = pOneDeckNew.splice(0, 1)
    let splicedCardB = pTwoDeckNew.splice(0, 1)

    console.log(splicedCardA, splicedCardB);
    
    if (splicedCardA[0] < splicedCardB[0]) {
        pTwoDeckNew.push(splicedCardA[0], splicedCardB[0]);
        
        console.log("Two Won", pTwoDeckNew)

    } else if (splicedCardA[0] > splicedCardB[0]) {
        pOneDeckNew.push(splicedCardA[0], splicedCardB[0]);
       
        console.log("One Won", pOneDeckNew)

    } else if (pOneDeckNew[0] === pTwoDeckNew[0]) {
        warCon();
    } else if (pOneDeckNew === null) {
        score.innerHTML = "Player 2 Win!"
    } else if (pTwoDeckNew === null) {
        score.innerHTML = "Player 1 Win!"
    }
}


// FUNCTION 01: WAR: warCon(): If index 0 of player 1 array === index 0 of player 2 array, execute:
    // Option 01: Skip comparison of next numbers to be loaded into index 0 for comparison in both arrays and load numbers after that OR Option 02: compare index 1 numbers.
    // Option 01 (ONLY): Store skipped cards in "holding" array (warArray perhaps?).
    // FUNCTION 02 to decide winner AND "payout" of "holding" array to winner.
        // Order of "payout" of numbers / cards: winner revealed card, loser revealed card, winner "holding" array acending order (index 0, then 1...)
    // If tie, repeat FUNCTION 01.

    function warCon() {
        if (pOneDeckNew[2] < pTwoDeckNew[2]) {
            let wonCardsA = pTwoDeckNew.splice(0, 3)
            let wonCardsB = pOneDeckNew.splice(0, 3)
            pTwoDeckNew.push(wonCardsA[0, 1, 2], wonCardsB[0, 1, 2])
            console.log(pTwoDeckNew);
        } else if (pOneDeckNew[2] > pTwoDeckNew[2]) {
            let wonCardsB = pOneDeckNew.splice(0, 3)
            let wonCardsA = pTwoDeckNew.splice(0, 3)
            pOneDeckNew.push(wonCardsB[0, 1, 2], wonCardsA[0, 1, 2])
            return pOneDeckNew;
        } else if (pOneDeckNew[2] === pTwoDeckNew[2]) {
            warCon2();
        }
    }
    
    function warCon2() {
        if (pOneDeckNew[4] < pTwoDeckNew[4]) {
            let wonCardsA = pTwoDeckNew.splice(0, 5)
            let wonCardsB = pOneDeckNew.splice(0, 5)
            pTwoDeckNew.push(wonCardsA[0, 1, 2, 4, 5], wonCardsB[0, 1, 2, 4, 5])
            return pTwoDeckNew;
        } else if (pOneDeckNew[4] > pTwoDeckNew[4]) {
            let wonCardsB = pOneDeckNew.splice(0, 5)
            let wonCardsA = pTwoDeckNew.splice(0, 5)
            pOneDeckNew.push(wonCardsB[0, 1, 2, 4, 5], wonCardsA[0, 1, 2, 4, 5])
            return pOneDeckNew;
        } else if (pOneDeckNew[4] === pTwoDeckNew[4]) {
            score.innerHTML = "What are the odds...4739. Congratulations!"
        }
    }


// FUNCTION 03: RENDER TURN: newCards(): Display corresponding, index 0 cards on top of both player card piles.
    // WIN PLAYER 1: Display text and/or animation indicating win.
    // WIN PLAYER 2: Display text and/or animation indicating win.
    // TIE: RENDER WAR: Displays face down card (timing about 1 second), then show new index 0 cards (FUNCTION 01 will skip the facedown card array equivalent).


// Some References:
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
// https://www.youtube.com/watch?v=myL4xmtAVtw
