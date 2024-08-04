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

function playRound(humanSelection) {  
    const computerSelection = getComputerChoice(); 

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

playRound();

// UI
const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorBtn = document.querySelector('#scissor-button');
const resultDiv = document.querySelector('#result');
const humanScoreDiv = document.querySelector('#human-score');
const computerScoreDiv = document.querySelector('#computer-score');

rockBtn.addEventListener("click", () => {
    const result = playRound('rock');
    resultDiv.textContent = result;
    humanScoreDiv.textContent = `Human score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
});

paperBtn.addEventListener("click", () => {
    const result = playRound('paper');
    resultDiv.textContent = result;
    humanScoreDiv.textContent = `Human score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
});

scissorBtn.addEventListener("click", () => {
    const result = playRound('scissors');
    resultDiv.textContent = result;
    humanScoreDiv.textContent = `Human score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
});