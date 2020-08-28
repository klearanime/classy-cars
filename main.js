class Vehicle {
  constructor(name, wheelCount, maxSpeed) {
    this.name = name;
    this.wheelCount = wheelCount;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
  }
  accelerate() {
    if (this.speed < this.maxSpeed) {
      return this.speed = this.speed + (this.maxSpeed / 3)
    }
  }
}

class Car extends Vehicle {
  constructor(name, maxSpeed) {
    super(name, 4, maxSpeed)
  }
  drive() {
    return 'Vroom. '
  }
}

class Ferrari extends Car {
  constructor() {
    super('Ferrari', 180);
  }
  drive() {
    return super.drive() + "I'm a Ferrari!";
  }
  accelerate() {
    if (this.speed < this.maxSpeed) {
      return this.speed = this.speed + (this.maxSpeed / 2);
    }
  }
}

// class Animal {
//   constructor(name, species, age, legs) {
//     this.name = name;
//     this.species = species;
//     this.age = age;
//     this.legs = legs;
//   }

//   speak() {
//     return `Hi, I'm ${this.name} the ${this.species}.`
//   }
// }

// class Mammal extends Animal {
//   constructor(name, species, age) {
//     super(name, species, age, 4);
//   }
// }

// class Reptile extends Animal {
//   constructor(name, species, age, legs) {
//     super(name, species, age, legs);
//   }
// }

// class Lizard extends Reptile {
//   constructor(name, age) {
//     super(name, 'lizard', age, 4);
//   }
// }

// class Snake extends Reptile {
//   constructor(name, age) {
//     super(name, 'snake', age, 0);
//   }
// }

// class Dog extends Mammal {
//   constructor(name, age) {
//     super(name, 'dog', age)
//   }

//   speak() {
//     return 'Woof! ' + super.speak();
//   }
// }

// class Cat extends Mammal {
//   constructor(name, age) {
//     super(name, 'cat', age)
//   }

//   speak() {
//     return 'Meow! ' + super.speak();
//   }
// }


// const fido = new Dog('Fido', 3);
// const garfield = new Cat('Garfield', 3);
// fido;
// garfield;
// const isFidoAnAnimal = fido instanceof Animal
// console.log(isFidoAnAnimal);
// console.log(fido.speak());
// console.log(garfield.speak());




module.exports = {
  Vehicle,
  Car,
  Ferrari
}



