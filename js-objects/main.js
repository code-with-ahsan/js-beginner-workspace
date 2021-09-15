// object-literal
// const car1 = {
//   make: "Toyota",
//   model: 2016,
//   color: "Gun Metallic",
//   numberOfDoors: 2,
//   licenseNo: "abc123",
// };

const fruits = ["apple", "mango", "grapes"];
const fruits2 = fruits;
fruits2.push("strawberry");

// const car2 = {
//   make: "Honda",
//   model: 2012,
//   color: "Red",
//   numberOfDoors: 4,
//   licenseNo: "abcasdz",
// };

// car2.color = "blue";
// car2["color"] = "purple";

// console.log(car2);

const author1 = {
  name: "Muhammad Ahsan Ayaz",
  age: 30,
  books: ["Angular Cookbook", "MERN Stack Crash Course"],
  residence: {
    address: "rasunda 20",
    city: "Stockholm",
    country: "Sweden",
  },
  designation: "Software Archicet",
  email: "abc@xyz.com",
  password: "1234",
  greeting() {
    console.log(`Hello ${this.name}`);
  },
  login() {
    console.log("Author logged in");
    this.greeting();
  },
  logout() {
    console.log("Author logged out");
  },
  createPost() {
    console.log("Post created");
  },
  deletePost() {
    console.log("Post deleted");
  },
  updatePost() {
    console.log("Post update");
  },
};

const basket1 = {
  items: 10,
  color: "black",
};

const basket2 = basket1;

let counterValue1 = 100;
let counterValue2 = counterValue1;

const favColor = "purple";
const isMuslim = true;

counterValue2 = -50;
basket1.items = 20000;

console.log(counterValue2);
