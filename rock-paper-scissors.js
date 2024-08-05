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


function updateScoresAndCheckWinner() {
    humanScoreDiv.textContent = `Human score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    
    if (humanScore === 5) {
        gameEnd.textContent = "You beat the computer!!!";
        disableButtons();
    
    } else if (computerScore === 5) {
        gameEnd.textContent = "You have been beaten by the computer!";
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}


function restartGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent = "";
    humanScoreDiv.textContent = `Human score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    gameEnd.textContent = '';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
}

const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorBtn = document.querySelector('#scissor-button');
const resultDiv = document.querySelector('#result');
const humanScoreDiv = document.querySelector('#human-score');
const computerScoreDiv = document.querySelector('#computer-score');
const gameEnd = document.querySelector('#game-result');
const restartBtn = document.querySelector('#restart-button');

rockBtn.addEventListener("click", () => {
    const result = playRound('rock');
    resultDiv.textContent = result;
    updateScoresAndCheckWinner();
});

paperBtn.addEventListener("click", () => {
    const result = playRound('paper');
    resultDiv.textContent = result;
    updateScoresAndCheckWinner();
});

scissorBtn.addEventListener("click", () => {
    const result = playRound('scissors');
    resultDiv.textContent = result;
    updateScoresAndCheckWinner();
});

restartBtn.addEventListener("click", () => {
    restartGame();
});