/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores = [0, 0];
let currentScore = 0;
let currentPlayer = false;   // 0 - first player 1 - second
let currentPanel = document.querySelector(".player-0-panel");

const rollDiceBtn = document.querySelector(".btn-roll");
const newGameBtn = document.querySelector(".btn-new");
const holdBtn = document.querySelector(".btn-hold");


holdBtn.addEventListener('click', changeCurrentPlayer);
rollDiceBtn.addEventListener('click', rollDice);

function resetPlayerScore() {
  scores = [0, 0];
  document.querySelectorAll(".player-score").forEach(e => e.innerText = 0);
}

function resetCurrentScore() {
  currentScore = 0;
  document.querySelectorAll(".player-current-score").forEach(e => e.innerText = 0);
}

resetPlayerScore();
resetCurrentScore();

function rollDice() {
  const randomValue = Math.round(Math.random() * 6 + 1);

  if (randomValue === 1) {
    currentScore = 0;
    changeCurrentPlayer();
  } else {
    currentScore += randomValue;
    currentPanel.querySelector(".player-current-score").innerText = currentScore;
  }
}

function changeCurrentPlayer() {
  const firstPanel = document.querySelector(".player-0-panel");
  const secondPanel = document.querySelector(".player-1-panel");

  scores[+currentPlayer] += currentScore;
  currentScore = 0;
  currentPanel.querySelector(".player-current-score").innerText = 0;
  currentPanel.querySelector(".player-score").innerText = scores[+currentPlayer];

  currentPlayer = !currentPlayer;

  if (currentPlayer) {
    firstPanel.classList.remove("active");
    secondPanel.classList.add("active");
    currentPanel = secondPanel;
  } else {
    firstPanel.classList.add("active");
    secondPanel.classList.remove("active");
    currentPanel = firstPanel;
  }


}