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
        return "Darn! You win this round!"
    }

    return "HA! I win!"
}
console.log(playRound())