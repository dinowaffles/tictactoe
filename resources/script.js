/* 
Start new game button
    Removes all .P1 and .P2 classes and innerText
    Clears P1 and P2 arrays

Player1 turn
    P1 controls bolded/colored
    P1 clicks on div, onclick .p1choice is applied to that div
        Pushes that div id to P1 choice array

Player2 turn
    P2 clicks on div, onclick .p2choice is applied to that div 
        Checks if that has already been chosen earlier in the game

Player1 turn
    onclick .p1choice

Player2 turn
    onclick .p2choice

Player1 turn
    onclick .p1choice
    Checks for winner
        If innerText of top, center, bottom, left, middle, right, or diagonals = X
        Log winner to results otherwise...

Player2 turn
    onclick .p2choice
    Checks for winner

Player1 turn
    onclick .p1choice
    Checks for winner

Player2 turn
    onclick .p2choice
    Checks for winner

Player1 turn
    onclick .p1choice
    Checks for winner
    Or tie

Functions: 
    Start new game
    Player1 turn
    Player1 choice
    Player2 turn
    Player2 choice
    Check for winner

*/

const topLeft = document.querySelector("#topleft");
const topMiddle = document.querySelector("#topmiddle");
const topRight = document.querySelector("#topright");
const centerLeft = document.querySelector("#centerleft");
const centerMiddle = document.querySelector("#centermiddle");
const centerRight = document.querySelector("#centerright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomMiddle = document.querySelector("#bottommiddle");
const bottomRight = document.querySelector("#bottomright");

const results = document.querySelector("#results");

const winners = [
    [topLeft, topMiddle, topRight],
    [centerLeft, centerMiddle, centerRight],
    [bottomLeft, bottomMiddle, bottomRight],
    [topLeft, centerLeft, bottomLeft],
    [topMiddle, centerMiddle, bottomMiddle],
    [topRight, centerRight, bottomRight],
    [topLeft, centerMiddle, bottomRight],
    [topRight, centerMiddle, bottomLeft]
];

let player1Choices = [];
let player2Choices = [];

let playerTurns = ["p1"]

const checkWinnersP1 = function() {
    if (playerTurns.length < 9) {
        if ((player1Choices.includes === winners[0]) ||
        (player1Choices.includes === winners[1]) ||
        (player1Choices.includes === winners[2]) ||
        (player1Choices.includes === winners[3]) ||
        (player1Choices.includes === winners[4]) ||
        (player1Choices.includes === winners[5]) ||
        (player1Choices.includes === winners[6]) ||
        (player1Choices.includes === winners[7]) ||
        (player1Choices.includes === winners[8])) {
            results.innerText = "Results: Player 1 Wins!"
        } else {
            player2Turn();
        }
    } else {
        results.innerText = "Results: Tie Game!"
    }
}

const checkWinnersP2 = function() {
    if (playerTurns.length < 9) {
        if ((player2Choices.includes === winners[0]) ||
        (player2Choices.includes === winners[1]) ||
        (player2Choices.includes === winners[2]) ||
        (player2Choices.includes === winners[3]) ||
        (player2Choices.includes === winners[4]) ||
        (player2Choices.includes === winners[5]) ||
        (player2Choices.includes === winners[6]) ||
        (player2Choices.includes === winners[7]) ||
        (player2Choices.includes === winners[8])) {
            results.innerText = "Results: Player 2 Wins!"
        } else {
            player1Turn();
        }
    } else {
        results.innerText = "Results: Tie Game!"
    }
}

const allChoices = document.querySelectorAll("div");

const player1Turn = function() {
    allChoices.forEach((div, choice) => {
        if (player1Choices.includes(div) || player2Choices.includes(div)) {
            return;
        } else {
            div.addEventListener("click", () => {
                div.classList.add("p1choice");
                div.innerText = "X";
                player1Choices.push(div);
                playerTurns.push("p2");
                checkWinnersP1();
            })
        }
    })
}

const player2Turn = function() {
    allChoices.forEach((div, choice) => {
        if (player1Choices.includes(div) || player2Choices.includes(div)) {
            return;
        } else {
            div.addEventListener("click", () => {
                div.classList.add("p2choice");
                div.innerText = "O";
                player2Choices.push(div);
                playerTurns.push("p2");
                checkWinnersP2();
            })
        }
    })
}



const newGame = function() {
    player1Turn()
}

newGame();

