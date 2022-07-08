console.log("HELLO!!!...");
setTimeout(() => {
  console.log("...are you still there?");
}, 3000);

console.log("GOODBYE!!");

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

// clearInterval(id); // -> 간격을 가지고 실행되는 함수 종료!
