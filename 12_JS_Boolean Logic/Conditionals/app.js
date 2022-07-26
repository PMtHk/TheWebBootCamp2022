console.log("ITS WORKING");

let random = Math.random();

if (random < 0.5) {
  console.log("MATH STILL WORKS!");
  console.log(random);
}

if (random >= 0.5) {
  console.log("Random Number is greater than 0.5");
}

const password = prompt("please enter a new password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("GOOD Password");
  } else {
    console.log("Password Cannot Contain Space!");
  }
} else {
  if (password.indexOf(" ") === -1) {
    console.log("Password Too Short!!");
  } else {
    console.log("Password Cannot Contain Space! and Password is Too Short!!");
  }
}
