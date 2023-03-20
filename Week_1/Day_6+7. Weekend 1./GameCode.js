let playerScore = 0;
let computerScore = 0;
let round = 1;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    playerScore++;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    computerScore++;
  }

  console.log(`Round ${round} score - Player: ${playerScore} Computer: ${computerScore}`);

  if (playerScore === 10) {
    console.log("You win the game!");
  } else if (computerScore === 10) {
    console.log("You lose the game!");
  }

  round++;
}

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function startGame() {
  while (playerScore < 10 && computerScore < 10) {
    const playerSelection = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}

startGame();