let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const winningCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = window.prompt("Make your choice! 'Rock', 'Paper', or 'Scissors'?").toLowerCase();
    
    while (!choices.includes(humanChoice)) {
        humanChoice = window.prompt("Well that can't be right? Make your choice! You need to enter Rock, Paper, or Scissors:").toLowerCase();
    }
    return humanChoice;
}

function playRound() {  
    const computerSelection = getComputerChoice(); 
    const humanSelection = getHumanChoice();

    console.log(`Human choice: ${humanSelection}`);
    console.log(`Computer choice: ${computerSelection}`);
    
    if (humanSelection === computerSelection) {
        return "It's a Tie!"
    }

    if (winningCombinations[humanSelection] === computerSelection) {
        humanScore++;
        return "You win this round..."
    }
    computerScore++;
    return "HA! I win! You Lose!"
}

function playGame() {
    let results = ""

    while (humanScore < 10000 && computerScore < 10000) {
        console.log(playRound());
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    console.log(results);
}

playGame();

