/*------Constants------*/


// let sound = new Audio(`sounds/startUp.wav`);
setTimeout(()=>{sound.play()},
200)

// startArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let startArray = [{Value: 14, Suit:"dA"},{Value: 11, Suit:"dQ"},{Value: 13, Suit:"dK"},{Value: 10, Suit:"dJ"},{Value: 10, Suit:"d10"},{Value: 9, Suit:"d09"},{Value: 8, Suit:"d08"},{Value: 7, Suit:"d07"},{Value: 6, Suit:"d06"},{Value: 5, Suit:"d05"},{Value: 4, Suit:"d04"},{Value: 3, Suit:"d03"},{Value: 2, Suit:"d02"},{Value: 14, Suit:"hA"},{Value: 12, Suit:"hQ"},{Value: 13, Suit:"hK"},{Value: 11, Suit:"hJ"},{Value: 10, Suit:"h10"},{Value: 9, Suit:"h09"},{Value: 8, Suit:"h08"},{Value: 7, Suit:"h07"},{Value: 6, Suit:"h06"},{Value: 5, Suit:"h05"},{Value: 4, Suit:"h04"},{Value: 3, Suit:"h03"},{Value: 2, Suit:"h02"},{Value: 14, Suit:"cA"},{Value: 12, Suit:"cQ"},{Value: 13, Suit:"cK"},{Value: 11, Suit:"cJ"},{Value: 10, Suit:"c10"},{Value: 9, Suit:"c09"},{Value: 8, Suit:"c08"},{Value: 7, Suit:"c07"},{Value: 6, Suit:"c06"},{Value: 5, Suit:"c05"},{Value: 4, Suit:"c04"},{Value: 3, Suit:"c03"},{Value: 2, Suit:"c02"},{Value: 14, Suit:"sA"},{Value: 12, Suit:"sQ"},{Value: 13, Suit:"sK"},{Value: 11, Suit:"sJ"},{Value:10, Suit:"s10"},{Value: 9, Suit:"s09"},{Value: 8, Suit:"s08"},{Value: 7, Suit:"s07"},{Value: 6, Suit:"s06"},{Value: 5, Suit:"s05"},{Value: 4, Suit:"s04"},{Value: 3, Suit:"s03"},{Value: 2, Suit:"s02"}]


const startDeck = randomizeDeck(startArray);

const makeHalfDeck = startDeck.splice(0, 52);


/*------Variables (state)------*/


let pOneDeck, ptwoDeck


/*------Cached Element References------*/


const nextCard = document.getElementById("newCard");
const startSet = document.getElementById("reStart");
const p1Deck = document.getElementById("pOneDeck");
const p2Deck = document.getElementById("pTwoDeck");
const p1War = document.getElementById("pOneWar");
const p2War = document.getElementById("pTwoWar");
const score = document.getElementById("message");
const tank = document.getElementById("ship");

/*------Event Listeners------*/


// ADDEVENTLISTENER: NEW CARD BUTTON: Initiates FUNCTION 2.
nextCard.addEventListener('click', function() {
    compareCard();
    blaster();
    loud();
})

// ADDEVENTLISTENER: START / RESET BUTTON: Initiates FUNCTION 00.5.
startSet.addEventListener('click', function() {
    location.reload();
})
    

/*------Functions------*/


// AUDIO FUNCTION:

function blaster() {
    let audio = new Audio(`sounds/laser.wav`);
    audio.play();
}

function loud() {
    let audio2 = new Audio(`sounds/boom.mp3`);
    setTimeout(()=>{audio2.play()},
    200)
}


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

console.log(pOneDeckNew[0].Value, pTwoDeckNew[0].Value);

function compareCard() {
    let splicedCardA = pOneDeckNew.splice(0, 1)
    let splicedCardB = pTwoDeckNew.splice(0, 1)

    console.log(splicedCardA, splicedCardB);
    
    // For render:
    let cardPickedA = splicedCardA[0]
    let cardPickedB = splicedCardB[0]
    render(cardPickedA, cardPickedB);
    
    if (splicedCardA[0].Value < splicedCardB[0].Value) {
        score.value = "Player 2 =>"
        tank.classList.add("ship-l0");
        for (let i = 0; i < splicedCardB.length; i++)
        pTwoDeckNew.push(splicedCardB[i], splicedCardA[i]);
        p1Deck.classList.add(splicedCardA[0].Suit);
        p2Deck.classList.add(splicedCardB[0].Suit);
        console.log("Two Won", pTwoDeckNew, "One Lost", pOneDeckNew)
       

    } else if (splicedCardA[0].Value > splicedCardB[0].Value) {
        score.value = "<= Player 1"
        tank.classList.add("ship-r0");
        for (let i = 0; i < splicedCardA.length; i++)
        pOneDeckNew.push(splicedCardA[i], splicedCardB[i]);
        p1Deck.classList.add(splicedCardA[0].Suit);
        p2Deck.classList.add(splicedCardB[0].Suit);
        

    } else if (splicedCardA[0].Value === splicedCardB[0].Value) {
        pOneDeckNew.unshift(splicedCardA[0])
        pTwoDeckNew.unshift(splicedCardB[0])
    } else if (splicedCardA[0] === undefined) {
        score.value = "Player 2 Wins!"
        nextCard.style.display = "none";
        tank.classList.add("theShip");
    } else if (splicedCardB[0] === undefined) {
        score.value = "Player 1 Wins!"
        nextCard.style.display = "none";
        tank.classList.add("theShip");
    }
}


// FUNCTION 01: WAR: warCon(): If index 0 of player 1 array === index 0 of player 2 array, execute:
    // Option 01: Skip comparison of next numbers to be loaded into index 0 for comparison in both arrays and load numbers after that OR Option 02: compare index 1 numbers.
    // Option 01 (ONLY): Store skipped cards in "holding" array (warArray perhaps?).
    // FUNCTION 02 to decide winner AND "payout" of "holding" array to winner.
        // Order of "payout" of numbers / cards: winner revealed card, loser revealed card, winner "holding" array acending order (index 0, then 1...)
    // If tie, repeat FUNCTION 01.

function warCon(pOneDeckNew, pTwoDeckNew) {
    if (pOneDeckNew[2].Value < pTwoDeckNew[2].Value) {
        score.value = "War Were Declared! =>"
        tank.classList.add("ship-l");
        let war1 = pOneDeckNew.splice(0, 3)
        let war2 = pTwoDeckNew.splice(0, 3)
        for (let i = 0; i < war2.length; i++)
        pTwoDeckNew.push(war2[i], war1[i]);
        p1War.classList.add(war1[2].Suit);
        p2War.classList.add(war2[2].Suit);
        return pTwoDeckNew
    } if (pOneDeckNew[2].Value > pTwoDeckNew[2].Value) { 
        score.value = "<= War Were Declared!"
        tank.classList.add("ship-r");
        let war1 = pOneDeckNew.splice(0, 3)
        let war2 = pTwoDeckNew.splice(0, 3)  
        for (let i = 0; i < war2.length; i++)
        pOneDeckNew.push(war1[i], war2[i]);
        p1War.classList.add(war1[2].Suit);
        p2War.classList.add(war2[2].Suit);
        return pOneDeckNew
    } if (pOneDeckNew[2] === pTwoDeckNew[2])
        warCon2(pOneDeckNew, pTwoDeckNew);
}

function warCon2(pOneDeckNew, pTwoDeckNew) {
    if (pOneDeckNew[4].Value < pTwoDeckNew[4].Value) {
        score.value = "Double War! 1 in 300 =>"
        tank.classList.add("ship-l");
        let war1 = pOneDeckNew.splice(0, 4)
        let war2 = pTwoDeckNew.splice(0, 4)
        for (let i = 0; i < war2.length; i++)
        pTwoDeckNew.push(war2[i], war1[i]);
        p1War.classList.add(war1[4].Suit);
        p2War.classList.add(war2[4].Suit);
        return pTwoDeckNew
    } if (pOneDeckNew[4].Value > pTwoDeckNew[4].Value) { 
        score.value = "<= Double War! 1 in 300"
        tank.classList.add("ship-r");
        let war1 = pOneDeckNew.splice(0, 4)
        let war2 = pTwoDeckNew.splice(0, 4)  
        for (let i = 0; i < war2.length; i++)
        pOneDeckNew.push(war1[i], war2[i]);
        p1War.classList.add(war1[4].Suit);
        p2War.classList.add(war2[4].Suit);
        return pOneDeckNew
    } if (pOneDeckNew[4].Value === pTwoDeckNew[4].Value)
        warCon3(pOneDeckNew, pTwoDeckNew);
}

function warCon3() {
    score.value = "1 in 4,739. You broke the game!"
}


// FUNCTION 03: RENDER TURN: newCards(): Display corresponding, index 0 cards on top of both player card piles.
    
function render(a, b) {
    if (a !== undefined) {  
        p1Deck.classList.remove("back-blue","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02");
        p1War.classList.remove("back-blue","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02");
        score.value = ""
        tank.classList.remove("theShip","ship-r","ship-l","ship-r0","ship-l0");
    }
    if (b !== undefined) {  
        p2Deck.classList.remove("back-blue","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02");
        p2War.classList.remove("back-blue","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02");
        score.value = ""
        tank.classList.remove("theShip", "theShip-r", "theShip-l");
    }

    if (a === 14) {  
        p1Deck.classList.add(deckArray[12]);
    }
    if (b === 14) {  
        p2Deck.classList.add(deckArray[12]);
    }
    if (a === 13) {  
        p1Deck.classList.add(deckArray[11]);
    }
    if (b === 13) {  
        p2Deck.classList.add(deckArray[11]);
    }
    if (a === 12) {  
        p1Deck.classList.add(deckArray[10]);
    }
    if (b === 12) {  
        p2Deck.classList.add(deckArray[10]);
    }
    if (a === 11) {  
        p1Deck.classList.add(deckArray[9]);
    }
    if (b === 11) {  
        p2Deck.classList.add(deckArray[9]);
    }
    if (a === 10) {  
        p1Deck.classList.add(deckArray[8]);
    }
    if (b === 10) {  
        p2Deck.classList.add(deckArray[8]);
    }
    if (a === 9) {  
        p1Deck.classList.add(deckArray[7]);
    }
    if (b === 9) {  
        p2Deck.classList.add(deckArray[7]);
    }
    if (a === 8) {  
        p1Deck.classList.add(deckArray[6]);
    }
    if (b === 8) {  
        p2Deck.classList.add(deckArray[6]);
    }
    if (a === 7) {  
        p1Deck.classList.add(deckArray[5]);
    }
    if (b === 7) {  
        p2Deck.classList.add(deckArray[5]);
    }
    if (a === 6) {  
        p1Deck.classList.add(deckArray[4]);
    }
    if (b === 6) {  
        p2Deck.classList.add(deckArray[4]);
    }
    if (a === 5) {  
        p1Deck.classList.add(deckArray[3]);
    }
    if (b === 5) {  
        p2Deck.classList.add(deckArray[3]);
    }
    if (a === 4) {  
        p1Deck.classList.add(deckArray[2]);
    }
    if (b === 4) {  
        p2Deck.classList.add(deckArray[2]);
    }
    if (a === 3) {  
        p1Deck.classList.add(deckArray[1]);
    }
    if (b === 3) {  
        p2Deck.classList.add(deckArray[1]);
    }
    if (a === 2) {  
        p1Deck.classList.add(deckArray[0]);
    }
    if (b === 2) {  
        p2Deck.classList.add(deckArray[0]);
    }
}


// deckArray = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

// This should be able to replace below code.
// p1Deck.classList.add(deckArray[splicedCardA[0] -= 2]);
// p2Deck.classList.add(deckArray[splicedCardB[0] -= 2]);


// Some References:
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
