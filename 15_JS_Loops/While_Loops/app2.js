let userInputMax = parseInt(prompt("Enter the maximum number!"));
while (!userInputMax) {
  userInputMax = parseInt(prompt("Enter the valid number!"));
}

const answer = Math.floor(Math.random() * userInputMax) + 1;

let userInput = parseInt(prompt("Guess the answer!!!"));
while (true) {
  if (userInput > answer) {
    userInput = prompt("Too High!!! Retry!!!");
  } else if (userInput < answer) {
    userInput = prompt("Too Low!!! Retry!!!");
  } else {
    window.confirm(`Congrats! You Got the Answer!!!\n
    The answer was ${answer}!!`);
    break;
  }
}
