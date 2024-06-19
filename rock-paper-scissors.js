let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"]; 

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

    if (humanSelection === 'Rock' && computerSelection === 'Scissors') {
        humanScore += 1;
        return "You win! Rock beats Scissors!";
    } else if (humanSelection === 'Scissors' && computerSelection === 'Paper') {
        humanScore += 1;
        return "You win! Scissors beats Paper!";
    } else if (humanSelection === 'Paper' && computerSelection === 'Rock') {
        humanScore += 1;
        return "You win! Paper beats Rock!";
    } else if (humanSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore += 1;
        return "HA! Rock beats Scissors!";
    } else if (humanSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore += 1;
        return "HA! Scissors beats Paper!";
    } else if (humanSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore += 1;
        return "HA! Paper beats Rock!";
    } else {
        humanScore += 1;
        computerScore += 1;
        return "It's a Tie!"
    }


    playRound(humanSelection, computerSelection);
}
console.log(playRound())