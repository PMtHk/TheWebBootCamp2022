const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Display = document.querySelector("#p1Score");
const p2Display = document.querySelector("#p2Score");
const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;

let winningScore = 11;
let isGameOver = false;

winningScoreSelect.addEventListener("change", (e) => {
  winningScore = parseInt(e.target.value);
  reset();
});

p1Btn.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetBtn.addEventListener("click", reset);

const reset = () => {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
};
