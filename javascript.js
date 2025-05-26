// generate computers choice of rock paper or scissors
//     use Math.random *3 and Math.floor to round, to get a number from 1-3
// get user input of choice rock paper or scissors
// check user choice and computer choice against eachother
// tel them if they have won
// restart game

let humanScore = 0;
let computerScore = 0;

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
    
    if 
}

