
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }else {
        console.log('You must enter "rock", "paper", or "scissors"');
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

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
    var userChoice = getUserChoice("scissors");
    var computerChoice = getComputerChoice();
    console.log("You chose: ", URLSearchParamsserChoice);
    console.log("The computer chose: ", computerChoice);
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
