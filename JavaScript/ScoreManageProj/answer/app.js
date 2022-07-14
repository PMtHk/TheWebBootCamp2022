const p1 = {
  score: 0,
  button: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1Score"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2Score"),
};

const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 11;
let isGameOver = false;

winningScoreSelect.addEventListener("change", (e) => {
  winningScore = parseInt(e.target.value);
  reset();
});

function gameOver(player, opponent) {
  isGameOver = true;
  player.display.classList.add("has-text-success");
  opponent.display.classList.add("has-text-danger");
  player.button.disabled = true;
  opponent.button.disabled = true;
}

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (
      player.score >= winningScore - 1 &&
      player.score - opponent.score <= 2
    ) {
      if (player.score - opponent.score === 2) {
        gameOver(player, opponent);
      }
    } else {
      if (player.score === winningScore) {
        gameOver(player, opponent);
      }
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

resetBtn.addEventListener("click", reset);
