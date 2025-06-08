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
const buttonDiv = document.querySelector("#buttons");
let humanScore = 4;
let computerScore = 4;

startBtn.addEventListener("click", startGame);

function removePlayfield() {
	const rockBtn = document.querySelector("#rockbtn");
	const paperBtn = document.querySelector("#paperbtn");
	const scissorsBtn = document.querySelector("#scissorsbtn");

	rockBtn.remove();
	paperBtn.remove();
	scissorsBtn.remove();

	const restartBtn = document.createElement("button");
	restartBtn.textContent = "Restart Game";
	buttonDiv.appendChild(restartBtn);

	restartBtn.addEventListener("click", function () {
		startGame();
		restartBtn.remove();
	});
}

function startGame() {
	humanScore = 0;
	computerScore = 0;
	subtitle.style.color = "black";
	title.style.color = "black";
	startBtn.remove();
	const rockBtn = document.createElement("button");
	rockBtn.setAttribute("id", "rockbtn");
	const paperBtn = document.createElement("button");
	paperBtn.setAttribute("id", "paperbtn");
	const scissorsBtn = document.createElement("button");
	scissorsBtn.setAttribute("id", "scissorsbtn");

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
	subtitle.textContent = "Make a choice to start.";
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
			subtitle.style.color = "green";
			winnerMessage = `You win!\n${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`;
			break;
		case "computer":
			++computerScore;
			subtitle.style.color = "red";
			winnerMessage = `You lose!\n${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
			break;
		case "draw":
			subtitle.style.color = "black";
			winnerMessage = `It's a draw!`;
			break;
	}
	subtitle.textContent = winnerMessage;
	setScoreText();
	console.log(winnerMessage);
	determineWinner();
}

function setScoreText() {
	title.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function determineWinner() {
	if (humanScore >= 5 || computerScore >= 5) {
		if (humanScore == 5) {
			title.textContent = `You Won!`;
			title.style.color = "green";
			subtitle.textContent = `With a score of ${humanScore} to ${computerScore}.`;

			removePlayfield();
		}
		if (computerScore === 5) {
			title.textContent = `You Lost!`;
			title.style.color = "red";
			subtitle.textContent = `With a score of ${computerScore} to ${humanScore}.`;

			removePlayfield();
		}
	}
}
