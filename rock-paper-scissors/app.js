let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//select a random element from the choices array

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertResultWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissor";
}

// functions of possible outcomes

function win(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "user".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore ++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = convertResultWord(userChoice) + smallUserWord + " beats " + convertResultWord(computerChoice) + smallCompWord + ". You win!";
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function loose(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "user".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	compScore ++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = convertResultWord(userChoice) + smallUserWord + " looses to " + convertResultWord(computerChoice) + smallCompWord + ". You lost!";
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "user".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = convertResultWord(userChoice) + smallUserWord + " draws " + convertResultWord(computerChoice) + smallCompWord + ". You draw!";
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

//possible outcomes

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rp':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
		break;
		case 'rp':
		case 'ps':
		case 'sr':
			loose(userChoice, computerChoice);
		break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
	}
}

// user-input defined in main

function main() {
	rock_div.addEventListener('click', () => game("r"));
	paper_div.addEventListener('click', () => game("p"));
	scissors_div.addEventListener('click', () => game("s"));
}

// call main

main();
