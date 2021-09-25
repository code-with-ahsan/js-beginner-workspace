// function Person(name, designation, country) {
//   this.name = name;
//   this.designation = designation;
//   this.country = country;
// }

// Person.prototype.greeting = () => {
//   console.log(`Hey! I am ${this.name}`);
// };

// Person.prototype.leave = () => {
//   console.log(`${this.name} has left the system`);
// };

class Person {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  greeting() {
    console.log(`Hey! I am ${this.name}`);
  }

  leave() {
    console.log(`${this.name} has left the system`);
  }
}

class SoftwareDeveloper extends Person {
  constructor(name, country, designation) {
    super(name, country);
    this.designation = designation;
  }
}

const person1 = new Person("Ahsan", "Sweden");
const person2 = new Person("Sid", "Italy");
const softwareDev1 = new SoftwareDeveloper(
  "Ahsan",
  "Sweden",
  "Software Architect"
);

console.log(person1);
console.log(person2);
console.log(softwareDev1);

class Shape {
  width = 10;
  height = 10;
}

class Circle extends Shape {
  radius = 20;
}

const myCircle = new Circle();

console.log(myCircle);

class Counter {
  instance() {
    let counter = 0;
    const sendToBE = () => {
      console.log("sending to backend");
    };
    return {
      getValue() {
        return counter;
      },
      increase() {
        counter++;
        sendToBE();
        return this.getValue();
      },
      decrease() {
        counter--;
        return this.getValue();
      },
    };
  }
}

const myCounter = new Counter().instance();
