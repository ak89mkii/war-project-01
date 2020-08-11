/*------Constants------*/


init();

function init() {
    startArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
}

// function init() {
//     deckImages = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
// }


const startDeck = randomizeDeck(startArray);

const makeHalfDeck = startDeck.splice(0, 52);


/*------Variables (state)------*/


let pOneDeck, ptwoDeck = []


/*------Cached Element References------*/


const nextCard = document.getElementById("newCard");
const startSet = document.getElementById("reStart");
const p1Deck = document.getElementById("pOneDeck");
const p2Deck = document.getElementById("ptwoDeck");
const score = document.getElementById("message");


/*------Event Listeners------*/


// ADDEVENTLISTENER: NEW CARD BUTTON: Initiates FUNCTION 2.
nextCard.addEventListener('click', function() {
    compareCard();
})

// ADDEVENTLISTENER: START / RESET BUTTON: Initiates FUNCTION 00.5.
startSet.addEventListener('click', function() {
    init();
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
        pTwoDeckNew.push(splicedCardB[0], splicedCardA[0]);
        
        console.log("Two Won", pTwoDeckNew, "One Lost", pOneDeckNew)
        render(splicedCardA[0], splicedCardB[0])

    } else if (splicedCardA[0] > splicedCardB[0]) {
        pOneDeckNew.push(splicedCardA[0], splicedCardB[0]);
       
        console.log("One Won", pOneDeckNew, "Two Lost", pTwoDeckNew)
        render(splicedCardA[0], splicedCardB[0])

    } else if (splicedCardA[0] === splicedCardB[0]) {
        pOneDeckNew.unshift(splicedCardA[0])
        pTwoDeckNew.unshift(splicedCardB[0])
        pOneDeckNew.splice(0, 2)
        pTwoDeckNew.splice(0, 2)
        console.log("War were declared", pOneDeckNew, pTwoDeckNew)
        // if (pOneDeckNew[2] < pTwoDeckNew[2]) {
        //     pTwoDeckNew.push(splicedCardB[0, 1, 2], splicedCardA[0, 1, 2])
        // } if (pOneDeckNew[2] > pTwoDeckNew[2]) {
        //     pOneDeckNew.push(splicedCardA[0, 1, 2], splicedCardB[0, 1, 2])  
        // }         
        console.log("Tie: What are the odds...300 to 1.")
    } else if (splicedCardA[0] === undefined) {
        score.innerHTML = "Player 2 Wins!"
    } else if (splicedCardB[0] === undefined) {
        score.innerHTML = "Player 1 Wins!"
    }
}


// FUNCTION 01: WAR: warCon(): If index 0 of player 1 array === index 0 of player 2 array, execute:
    // Option 01: Skip comparison of next numbers to be loaded into index 0 for comparison in both arrays and load numbers after that OR Option 02: compare index 1 numbers.
    // Option 01 (ONLY): Store skipped cards in "holding" array (warArray perhaps?).
    // FUNCTION 02 to decide winner AND "payout" of "holding" array to winner.
        // Order of "payout" of numbers / cards: winner revealed card, loser revealed card, winner "holding" array acending order (index 0, then 1...)
    // If tie, repeat FUNCTION 01.

    // function warCon() {
    //     let splicedCardA = pOneDeckNew.splice(0, 3)
    //     let splicedCardB = pTwoDeckNew.splice(0, 3)
    //     if (splicedCardA[2] < splicedCardB[2]) {
    //         pTwoDeckNew.push(splicedCardB[0, 1], splicedCardA[0, 1])
    //         console.log(pTwoDeckNew);
    //     } else if (splicedCardA[2] > splicedCardB[2]) {
    //         pTwoDeckNew.push(splicedCardA[0, 1], splicedCardB[0, 1])
    //         console.log(pTwoDeckNew);
    //     } else if (pOneDeckNew[2] === pTwoDeckNew[2]) {
    //         warCon2();
    //     }
    // }
    
    // function warCon2() {
    //     if (pOneDeckNew[4] < pTwoDeckNew[4]) {
    //         let wonCardsA = pTwoDeckNew.splice(0, 5)
    //         let wonCardsB = pOneDeckNew.splice(0, 5)
    //         pTwoDeckNew.push(wonCardsA[0, 1, 2, 4, 5], wonCardsB[0, 1, 2, 4, 5])
    //         return pTwoDeckNew;
    //     } else if (pOneDeckNew[4] > pTwoDeckNew[4]) {
    //         let wonCardsB = pOneDeckNew.splice(0, 5)
    //         let wonCardsA = pTwoDeckNew.splice(0, 5)
    //         pOneDeckNew.push(wonCardsB[0, 1, 2, 4, 5], wonCardsA[0, 1, 2, 4, 5])
    //         return pOneDeckNew;
    //     } else if (pOneDeckNew[4] === pTwoDeckNew[4]) {
    //         score.innerHTML = "What are the odds...4739. Congratulations!"
    //     }
    // }


// FUNCTION 03: RENDER TURN: newCards(): Display corresponding, index 0 cards on top of both player card piles.
    
function render(a, b) {
    if (a && b !== undefined) {  
        p1Deck.classList.remove("back-blue");
        p2Deck.classList.remove("back-blue");
    }
}


// Some References:
// https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
// https://www.youtube.com/watch?v=myL4xmtAVtw
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// https://animate.style/

