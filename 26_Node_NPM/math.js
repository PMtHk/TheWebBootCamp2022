const add = (x, y) => x + y;

const PI = 3.141592;

const square = (x) => x * x;

// shortcut 도 가능. 아래처럼.

// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.141592;
// module.exports.square= (x) => x * x;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// 아래와 같이도 export 가능.
const math = {
  add: add,
  PI: PI,
  square: square,
};

module.exports = math;
// exports.math; // shortcut
