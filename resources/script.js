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

//identifies possible spaces a player can choose
const topLeft = document.querySelector("#topleft");
const topMiddle = document.querySelector("#topmiddle");
const topRight = document.querySelector("#topright");
const centerLeft = document.querySelector("#centerleft");
const centerMiddle = document.querySelector("#centermiddle");
const centerRight = document.querySelector("#centerright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomMiddle = document.querySelector("#bottommiddle");
const bottomRight = document.querySelector("#bottomright");

//identifies the gameboard of all possible spaces
const allChoices = document.querySelectorAll("div");

//identifies button to start a new game
const startBtn = document.querySelector("#startbtn");

//displays which player's turn it is
const player1Display = document.querySelector("#player1");
const player2Display = document.querySelector("#player2");

//displays the result of that particular game
const results = document.querySelector("#results");

//displays the results of all games played
const p1WinsDisplay = document.querySelector("#p1wins");
const p2WinsDisplay = document.querySelector("#p2wins");
const tiesDisplay = document.querySelector("#ties")

let p1Wins = 0;
let p2Wins = 0;
let ties = 0;

//arrays of elements that player1 and player2 have already chosen
let player1Choices = [];
let player2Choices = [];

//keeps track of when there is an outcome and stops game play
let gameEnd = false;

//checks if there is a winner at the end of player1's turn
const checkWinnersP1 = function() {
        if ((topLeft.innerText === "X" && topMiddle.innerText ==="X" && topRight.innerText === "X") ||
        (centerLeft.innerText === "X" && centerMiddle.innerText ==="X" && centerRight.innerText === "X") ||
        (bottomLeft.innerText === "X" && bottomMiddle.innerText ==="X" && bottomRight.innerText === "X") ||
        (topLeft.innerText === "X" && centerLeft.innerText ==="X" && bottomLeft.innerText === "X") ||
        (topMiddle.innerText === "X" && centerMiddle.innerText ==="X" && bottomMiddle.innerText === "X") ||
        (topRight.innerText === "X" && centerRight.innerText ==="X" && bottomRight.innerText === "X") ||
        (topLeft.innerText === "X" && centerMiddle.innerText ==="X" && bottomRight.innerText === "X") ||
        (topRight.innerText === "X" && centerMiddle.innerText ==="X" && bottomLeft.innerText === "X")) {
            results.innerText = "Results: Player 1 Wins!";
            p1WinsDisplay.innerText = (p1Wins += 1);
            gameEnd = true;
    } else {
        if (turnsPlayed < 8) {
            player1Display.classList.remove("yourTurn");
            player2Display.classList.add("yourTurn");
            turnsPlayed += 1;
        } else {
            results.innerText = "Results: Tie Game!";
            tiesDisplay.innerText = (ties += 1);
            gameEnd = true;
        };
    };
};

//checks if there is a winner at the end of player2's turn
const checkWinnersP2 = function() {
    if ((topLeft.innerText === "O" && topMiddle.innerText ==="O" && topRight.innerText === "O") ||
    (centerLeft.innerText === "O" && centerMiddle.innerText ==="O" && centerRight.innerText === "O") ||
    (bottomLeft.innerText === "O" && bottomMiddle.innerText ==="O" && bottomRight.innerText === "O") ||
    (topLeft.innerText === "O" && centerLeft.innerText ==="O" && bottomLeft.innerText === "O") ||
    (topMiddle.innerText === "O" && centerMiddle.innerText ==="O" && bottomMiddle.innerText === "O") ||
    (topRight.innerText === "O" && centerRight.innerText ==="O" && bottomRight.innerText === "O") ||
    (topLeft.innerText === "O" && centerMiddle.innerText ==="O" && bottomRight.innerText === "O") ||
    (topRight.innerText === "O" && centerMiddle.innerText ==="O" && bottomLeft.innerText === "O")) {
        results.innerText = "Results: Player 2 Wins!"
        p2WinsDisplay.innerText = (p2Wins += 1); 
        gameEnd = true;
    } else {
        player2Display.classList.remove("yourTurn");
        player1Display.classList.add("yourTurn");
        turnsPlayed += 1;
    };
};

//keeps track of whether it is player1 or player2's turn
let turnsPlayed = 0;

//function to play a new game
const newGame = function() {
    player1Display.classList.add("yourTurn");
    allChoices.forEach((div) => {
        div.addEventListener("click", onCellClick)
    });
};

//event listener for each space on the gameboard & game play logic
const onCellClick = function (event) {
    if (gameEnd === true) {
        return;
    } else {
        if ((player1Choices.includes(event.target)) || (player2Choices.includes(event.target))) {
            alert("Choose an empty space.");
        } else {
            if (turnsPlayed % 2 === 0) {
                event.target.innerText = "X";
                event.target.classList.add("p1choice");
                player1Choices.push(event.target);
                checkWinnersP1();
            } else if (turnsPlayed % 2 !== 0) {
                event.target.innerText = "O";
                event.target.classList.add("p2choice");
                player2Choices.push(event.target);
                checkWinnersP2();
            };
        };
    };
}

//starts a new game when the start button is pressed; clears board and arrays
startBtn.addEventListener("click", () => {
    player1Choices = [];
    player2Choices = [];
    turnsPlayed = 0;
    allChoices.forEach((div) => {
        div.innerText = "";
        div.classList.remove("p1choice");
        div.classList.remove("p2choice");
        div.removeEventListener("click", onCellClick)
    });
    results.innerText = "Results:"
    player1Display.classList.add("yourTurn");
    player2Display.classList.remove("yourTurn");
    gameEnd = false;
    newGame();
});
