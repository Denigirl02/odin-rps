// generate computers choice of rock paper or scissors
//     use Math.random *3 and Math.floor to round, to get a number from 1-3
// get user input of choice rock paper or scissors
// check user choice and computer choice against eachother
// tel them if they have won
// restart game

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice() {
    let choice = "";
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice
}

function getHumanChoice() {
    let choice = prompt("What do you choose? Rock, Paper or Scissors?")
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let winner = null;
    let messageCode = null;

    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                winner = "draw";
                break;
            case "paper":
                winner = "computer";
                break;
            case "scissors":
                winner = "human";
                break;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                winner = "human";
                break;
            case "paper":
                winner = "draw";
                break;
            case "scissors":
                winner = "computer";
                break;
        }
    } else if (humanChoice === "scissors") {
            switch (computerChoice) {
            case "rock":
                winner = "computer";
                break;
            case "paper":
                winner = "human";
                break;
            case "scissors":
                winner = "draw";
                break;
        }
    }
    console.log(humanChoice + " " + computerChoice + " Winner: " + winner);
    

}

