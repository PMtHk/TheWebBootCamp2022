function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}

// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

// exercise
// let b = [1, 2, 3, 4, 5];
// console.log(b.length);

// function lastElement(a) {
//   if (a.length === 0) return null;
//   return a[a.length - 1];
// }
// let c = lastElement(b);
// console.log(c);

// let str = "eggplant";

// function capitalize(str) {
//   let firstLetter = str.slice(0, 1).toUpperCase();
//   let whatElse = str.slice(1);
//   console.log(firstLetter);
//   console.log(whatElse);
//   return firstLetter + whatElse;
// }

// let a = capitalize("eggplant");
// console.log(a);
