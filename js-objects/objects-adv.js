function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}

// function Author(nameValue, ageValue, booksValue) {
//   this.name = nameValue;
//   this.age = ageValue;
//   this.books = booksValue;
// }

// Author.prototype.greeting = function () {
//   console.log(`Hello ${this.name}`);
// };

// Author.prototype.login = function () {
//   console.log("Author logged in");
//   this.greeting();
// };
// Author.prototype.logout = function () {
//   console.log("Author logged out");
// };

class Author {
  name;
  age;
  books;

  constructor(nameValue, ageValue, booksValue = []) {
    this.name = nameValue;
    this.age = ageValue;
    this.books = booksValue;
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }

  login() {
    console.log("Author logged in");
    this.greeting();
  }
  logout() {
    console.log("Author logged out");
  }
}

const author1 = new Author("Muhammad Ahsan Ayaz", 30, []);
const author2 = new Author("Nazish", 16);

console.log(author1);
console.log(author2);
