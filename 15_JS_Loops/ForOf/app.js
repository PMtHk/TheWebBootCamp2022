const subreddits = [
  "cringe",
  `books`,
  `chickens`,
  `funny`,
  `pics`,
  `soccer`,
  `gunners`,
];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
  console.log(sub);
}

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let k = 0; k < seatingChart.length; k++) {
//   const row = seatingChart[k];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

for (let char of "hello world") {
  console.log(char);
}
