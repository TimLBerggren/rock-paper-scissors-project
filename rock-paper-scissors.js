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
console.log(getComputerChoice())

function getHumanChoice() {
    const humanChoice = window.prompt("Make your choice! 'Rock', 'Paper', or 'Scissors'?").toLowerCase();
    
    while (!choices.includes(humanChoice)) {
        humanChoice = window.prompt("Well that can't be right? Make your choice! You need to enter Rock, Paper, or Scissors:").toLowerCase();
    }
    return humanChoice;
}
console.log(getHumanChoice())

function playRound(humanChoice,computerChoice) {  
    const computerSelection = getComputerChoice(); 
    const humanSelection = getHumanChoice();
    
    if (humanSelection === computerSelection) {
        return "It's a Tie!"
    }

    if (winningCombinations[humanSelection] === computerSelection) {
        return "Darn! You win this round!"
    }

    return "HA! I win!"
}
console.log(playRound())