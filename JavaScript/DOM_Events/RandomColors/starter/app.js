const button = document.querySelector("#changeColor");
const h1 = document.querySelector("#title");

button.addEventListener("click", () => {
  const newColor = makeRandomColor();
  const colorInfo = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
  document.body.style.backgroundColor = colorInfo;

  h1.innerText = colorInfo;
  if (newColor[0] + newColor[1] + newColor[2] < 200) {
    h1.style.color = "white";
  }
});

const makeRandomColor = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [r, g, b];
};
