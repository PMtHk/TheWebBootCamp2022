const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!!");
};

function scream() {
  console.log("AAAAAAAHHHHHHHHHH");
  console.log("STOP TOUCHING ME");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("you clicked the h1");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("dblclick", () => {
  alert("CLICKED");
});

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT");
}

const tasBtn = document.querySelector("#tas");

tasBtn.onclick = twist;
tasBtn.onclick = shout; // shout 만 실행됨. -> addEventListener 사용하는 이유.

// 둘다 실행되게 하는 방법이다.
tasBtn.addEventListener("click", twist);
tasBtn.addEventListener("click", shout);
