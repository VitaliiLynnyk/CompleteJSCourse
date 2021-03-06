/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const rollDiceBtn = document.querySelector(".btn-roll");
const newGameBtn = document.querySelector(".btn-new");
const holdBtn = document.querySelector(".btn-hold");

let scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;   // 0 - first player 1 - second

newGameBtn.addEventListener('click', () => {
  resetPlayerScore();
  resetCurrentScore();
});
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', changeCurrentPlayer);

resetPlayerScore();
resetCurrentScore();

function resetPlayerScore() {
  scores = [0, 0];
  document.querySelectorAll(".player-score")
    .forEach(e => e.innerText = 0);
}

function resetCurrentScore() {
  currentScore = 0;
  document.querySelectorAll(".player-current-score")
    .forEach(e => e.innerText = 0);
}

function rollDice() {
  const randomValue = Math.floor((Math.random() * 6) + 1);
  const dice = document.querySelector(".dice");
  dice.src = `dice-${randomValue}.png`;
  dice.animate([
    { transform: 'translateX(-50%) rotate(0)' },
    { transform: 'translateX(-50%) rotate(360deg)' }
  ], {
      duration: 500,
      iterations: 1
    });

  if (randomValue === 1) {
    resetCurrentScore();
    changeCurrentPlayer();
  } else {
    currentScore += randomValue;
    document.querySelector(`.player-${currentPlayer}-panel`)
      .querySelector(".player-current-score")
      .innerText = currentScore;
  }
}

function checkWon(currentScore) {
  if (currentScore >= 100) {
    const name = document.querySelector(`.player-${currentPlayer}-panel`)
      .querySelector(".player-name");
    alert(`Player ${name.innerText} won with score ${currentScore}`);
    resetPlayerScore();
    resetCurrentScore();
  }
}

function increaseScore(personId, value) {
  scores[personId] += value;
  return scores[personId];
}

function changeCurrentPlayer() {
  document.querySelector(`.player-${currentPlayer}-panel`)
    .querySelector(".player-score")
    .innerText = increaseScore(currentPlayer, currentScore);
  resetCurrentScore();
  checkWon(scores[currentPlayer]);

  document.querySelector(`.player-${currentPlayer}-panel`)
    .classList.remove("active");
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  document.querySelector(`.player-${currentPlayer}-panel`)
    .classList.add("active");
}