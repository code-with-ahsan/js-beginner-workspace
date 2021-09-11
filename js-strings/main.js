const myName = "Muhammad Ahsan Ayaz";
const modifiedName = myName.replace("Ahsan", "Mohsin");

const fruits = "Mango, Apple, Grape, Banana";

const loremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const userInput = "I am Muhammad Ahsan Ayaz";
let firstName;
let lastName;

firstName = userInput.substring(5, 19);
lastName = userInput.substring(20);

for (let i = 0, len = 20; i < len; ++i) {
  const numberString = i.toString();
  const padded = numberString.padStart(2, "0");
  console.log(padded);
}

const users = [
  "Mahroz",
  "Nazish",
  "Muhammad Ahsan",
  "Sidben",
  "Fahad",
  "Dawood",
];

let maxLength = 0;

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (user.length > maxLength) {
    maxLength = user.length;
  }
}

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const paddedUser = user.padStart(maxLength, "_");
  console.log(paddedUser);
}
