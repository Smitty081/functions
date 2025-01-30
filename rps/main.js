
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } 
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);  // Randomly choose 0, 1, or 2
    if (choice === 0) {
        return "The computer chose rock";
    } else if (choice === 1) {
        return "The computer chose paper";
    } else {
        return "The computer chose scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game was a tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
    } else {
        return "The computer wins!";
    }
}

function playGame () {
    let userChoice = getUserChoice("rock", "paper", "scissors");
    let computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame()


/*let userInput = "rock";  // Change this to test different inputs
let userChoice = getUserChoice(userInput);  // Get the user choice
if (userChoice) {
    let computerChoice = getComputerChoice();  // Get computer's choice
    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));  // Determine the winner
}*/
