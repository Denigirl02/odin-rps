// generate computers choice of rock paper or scissors
//     use Math.random *3 and Math.floor to round, to get a number from 1-3
// get user input of choice rock paper or scissors
// check user choice and computer choice against eachother
// tel them if they have won
// restart game

//playGame();
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", function () {
	playRound("Rock", getComputerChoice());
});
paperBtn.addEventListener("click", function () {
	playRound("Paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
	playRound("Scissors", getComputerChoice());
});

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
	return choice;
}

function playGame() {
	const roundAmount = 5;
	let humanScore = 0;
	let computerScore = 0;
	for (let currentRound = 1; currentRound <= roundAmount; currentRound++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();

		playRound(humanSelection, computerSelection);
		/*
        if (currentRound == 5) {
            if (humanScore > computerScore) {
                console.log(`You win with a score of ${humanScore} to ${computerScore}`);
            } else if (humanScore < computerScore) {
                console.log(`You lose with a score of ${computerScore} to ${humanScore}`);
            } else if (humanScore == computerScore) {
                console.log(`It's a draw with a score of ${humanScore} to ${computerScore}`);
            }
        
        
        }
        */
	}
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

	// Set winning message, and assign points based on who won
	let winnerMessage = "";
	switch (winner) {
		case "human":
			++humanScore;
			winnerMessage = `You win!\n${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!\nCurrent Score: Human: ${humanScore} | Computer ${computerScore}`;
			break;
		case "computer":
			++computerScore;
			winnerMessage = `You lose!\n${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!\nCurrent Score: Human: ${humanScore} | Computer ${computerScore}`;
			break;
		case "draw":
			winnerMessage = `It's a draw!\nCurrent Score: Human: ${humanScore} | Computer ${computerScore}`;
			break;
	}

	console.log(winnerMessage);
}
