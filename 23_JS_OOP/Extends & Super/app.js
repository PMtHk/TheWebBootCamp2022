class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating now!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return `MEOWWWW!!!`;
  }
}

class Dog extends Pet {
  bark() {
    return `WOOOOF!!!`;
  }
}
