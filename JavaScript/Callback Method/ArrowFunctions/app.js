// 화살표 함수 ArrowFunction

const add = function (x, y) {
  return x + y;
};
// 정확히 동일하다.
const add2 = (x, y) => {
  return x + y;
};

const square = (x) => {
  // 인자가 하나일 때, 괄호 없어도 됨.
  return x ** 2;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
// 암시적 반환
const rollDiee = () => Math.floor(Math.random * 6) + 1;

const add3 = (a, b) => a + b;
