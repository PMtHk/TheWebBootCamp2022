const p1Btn = document.querySelector("#p1");
const p2Btn = document.querySelector("#p2");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1score");
const p2Display = document.querySelector("#p2score");
const maxInput = document.querySelector("input");

let p1Score = 0;
let p2Score = 0;
let maxScore = 21;

maxInput.addEventListener("change", (e) => {
  maxScore = e.target.value;
});

p1Btn.addEventListener("click", function () {
  p1Score++;
  p1Display.textContent = p1Score;
});

p2Btn.addEventListener("click", function () {
  p2Score++;
  p2Display.textContent = p2Score;
});

resetBtn.addEventListener("click", () => {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
});

if (p1Score == maxScore) {
  console.log(999);
}
