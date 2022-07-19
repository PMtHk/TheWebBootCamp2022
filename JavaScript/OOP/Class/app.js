class Color {
  // class 이름은 대문자로 시작.
  constructor(r, g, b, name) {
    // 새로운 Color 가 생성될 때, 즉시 실행되는 함수.
    // console.log("INSIDE CONSTRUCTOR");
    // console.log(r, g, b);
    this.r = r;
    this.g = g;
    this.b = b;
    this.colorName = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const tomato = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");


