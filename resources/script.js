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

let player1Choices = [];
let player2Choices = [];

let turnsPlayed = 0;

const newGame = function() {

    allChoices.forEach((div) => {
        div.addEventListener("click", () => {
            if ((player1Choices.includes(div)) || (player2Choices.includes(div))) {
                alert("Choose an empty space.")
            } else {
                if (turnsPlayed % 2 === 0) {
                    div.innerText = "X";
                    div.classList.add("p1choice");
                    player1Choices.push(div);
                    if ((topLeft.innerText === "X" && topMiddle.innerText ==="X" && topRight.innerText === "X") ||
                    (centerLeft.innerText === "X" && centerMiddle.innerText ==="X" && centerRight.innerText === "X") ||
                    (bottomLeft.innerText === "X" && bottomMiddle.innerText ==="X" && bottomRight.innerText === "X") ||
                    (topLeft.innerText === "X" && centerLeft.innerText ==="X" && bottomLeft.innerText === "X") ||
                    (topMiddle.innerText === "X" && centerMiddle.innerText ==="X" && bottomMiddle.innerText === "X") ||
                    (topRight.innerText === "X" && centerRight.innerText ==="X" && bottomRight.innerText === "X") ||
                    (topLeft.innerText === "X" && centerMiddle.innerText ==="X" && bottomRight.innerText === "X") ||
                    (topRight.innerText === "X" && centerMiddle.innerText ==="X" && bottomLeft.innerText === "X")) {
                        results.innerText = "Results: Player 1 Wins!"
                    } else {
                        if (turnsPlayed < 8) {
                            turnsPlayed += 1;
                        } else {
                            results.innerText = "Results: Tie Game!"
                        }
                    }
                } else if (turnsPlayed % 2 !== 0) {
                    div.innerText = "0";
                    div.classList.add("p2choice");
                    player2Choices.push(div);
                    if ((topLeft.innerText === "O" && topMiddle.innerText ==="O" && topRight.innerText === "O") ||
                    (centerLeft.innerText === "O" && centerMiddle.innerText ==="O" && centerRight.innerText === "O") ||
                    (bottomLeft.innerText === "O" && bottomMiddle.innerText ==="O" && bottomRight.innerText === "O") ||
                    (topLeft.innerText === "O" && centerLeft.innerText ==="O" && bottomLeft.innerText === "O") ||
                    (topMiddle.innerText === "O" && centerMiddle.innerText ==="O" && bottomMiddle.innerText === "O") ||
                    (topRight.innerText === "O" && centerRight.innerText ==="O" && bottomRight.innerText === "O") ||
                    (topLeft.innerText === "O" && centerMiddle.innerText ==="O" && bottomRight.innerText === "O") ||
                    (topRight.innerText === "O" && centerMiddle.innerText ==="O" && bottomLeft.innerText === "O")) {
                        results.innerText = "Results: Player 2 Wins!"
                    } else {
                        turnsPlayed += 1; 
                    }
                }
            }
        })
    })
}

newGame();

