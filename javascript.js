// generate computers choice of rock paper or scissors
//     use Math.random *3 and Math.floor to round, to get a number from 1-3
// get user input of choice rock paper or scissors
// check user choice and computer choice against eachother
// tel them if they have won
// restart game

//playGame();
const startBtn = document.querySelector("#start");
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
let humanScore = 0;
let computerScore = 0;

startBtn.addEventListener("click", startGame);

function startGame() {
	startBtn.remove();
	const buttonDiv = document.querySelector("#buttons");
	const rockBtn = document.createElement("button");
	const paperBtn = document.createElement("button");
	const scissorsBtn = document.createElement("button");

	rockBtn.textContent = "Rock";
	paperBtn.textContent = "Paper";
	scissorsBtn.textContent = "Scissors";

	buttonDiv.appendChild(rockBtn);
	buttonDiv.appendChild(paperBtn);
	buttonDiv.appendChild(scissorsBtn);

	rockBtn.addEventListener("click", function () {
		playRound("Rock", getComputerChoice());
	});
	paperBtn.addEventListener("click", function () {
		playRound("Paper", getComputerChoice());
	});
	scissorsBtn.addEventListener("click", function () {
		playRound("Scissors", getComputerChoice());
	});

	setScoreText();
	subtitle.textContent = "";
}

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
	console.log(choice);

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
			winnerMessage = `You win!\n${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`;
			break;
		case "computer":
			++computerScore;
			winnerMessage = `You lose!\n${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
			break;
		case "draw":
			winnerMessage = `It's a draw!`;
			break;
	}
	subtitle.textContent = winnerMessage;
	setScoreText();
	console.log(winnerMessage);
}

function setScoreText() {
	title.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}
