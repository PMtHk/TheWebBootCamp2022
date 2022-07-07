const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnieL: 60,
};

// get total score
let sum = 0;
for (let person of Object.values(testScores)) {
  sum += person;
}
console.log(sum);
