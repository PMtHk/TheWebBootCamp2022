// let count = 0;

// while (count < 10) {
//   count++;
//   console.log(count);
// }

//but... generally using for...!
// for (let i = 1; i <= 10; i++) {}

// while (!gameOver) {
//   //player 1 move
//   //player 2 move
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code...");
// }
// window.confirm("CONGRATS YOU GOT THE SECRET!!!");

let input = prompt("Hey, Say Something!");

while (true) {
  input = prompt(input);
  if (input === "stop copying me") {
    break;
  }
}
console.log("OK! You Win!!!");
