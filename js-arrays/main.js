const myName = "Ahsan";

const daysInWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// daysInWeek.forEach((day) => {
//   console.log(day);
// });

// for (let index = 0; index < 7; index++) {
//   console.log(daysInWeek[index]);
// }

const topFollowers = ["Fahad", "Raja", "Sebbel", "Salman", "Usman"];
topFollowers.unshift("John Wick");
// for (let index = 0; index < topFollowers.length; index++) {
//   console.log(topFollowers[index]);
// }
// const fruits = ["🍎", "🍉", "🍓"];
// console.log(fruits);

const combinedBasket = [
  "🍎",
  "🍎",
  "🍎",
  "🍎",
  "🍎",
  "🍎",
  "🍎",
  "🍎",
  "🍇",
  "🍇",
  "🍇",
  "🍇",
  "🍇",
  "🍇",
];

const books = [
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook v2",
  },
  {
    author: "Fahad Osama",
    name: "Fahad's book",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook v2",
  },
  {
    author: "Fahad Osama",
    name: "Fahad's book",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook v2",
  },
  {
    author: "Fahad Osama",
    name: "Fahad's book",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook v2",
  },
  {
    author: "Fahad Osama",
    name: "Fahad's book",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook",
  },
  {
    author: "Muhammad Ahsan Ayaz",
    name: "Angular Cookbook v2",
  },
  {
    author: "Fahad Osama",
    name: "Fahad's book",
  },
];

const followersWithActivity = topFollowers.map((followerName) => {
  return {
    name: followerName,
    active: true,
  };
});

followersWithActivity[3].active = false;

const isEveryoneActive = followersWithActivity.every((follower) => {
  return follower.active === true;
});

const students = [
  { name: "abc", passed: false },
  { name: "abc", passed: false },
  { name: "abc", passed: false },
  { name: "abc", passed: true },
  { name: "abc", passed: false },
];

const hasAnyonePassed = students.some((student) => {
  return student.passed === true;
});

const booksByAhsan = books.filter((book) => {
  return book.author === "Muhammad Ahsan Ayaz";
});

const booksWithPublisher = books.map((book) => {
  book.publisher = "Packt";
  return book;
});

const grapesBasket = combinedBasket.filter((element) => {
  return element === "🍇";
});

const applesBasket = combinedBasket.filter((element) => {
  return element === "🍎";
});
