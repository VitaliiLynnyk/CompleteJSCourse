/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores = [0, 0];
let currentPlayer = false;   // 0 - first player 1 - second






const rollDiceBtn = document.querySelector(".btn-roll");
const newGameBtn = document.querySelector(".btn-new");
const holdBtn = document.querySelector(".btn-hold");

holdBtn.addEventListener('click', changeCurrentPlayer);

function changeCurrentPlayer() {
  const firstPanel = document.querySelector(".player-0-panel");
  const secondPanel = document.querySelector(".player-1-panel");

  currentPlayer = !currentPlayer;

  if (currentPlayer) {
    firstPanel.classList.remove("active");
    secondPanel.classList.add("active");
  } else {
    firstPanel.classList.add("active");
    secondPanel.classList.remove("active");
  }
}