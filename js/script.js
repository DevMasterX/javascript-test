// "use strict";

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// function add(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// console.log(each(arr, add));
// console.log(each(arr, mult));

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// function logProduct(obj) {
//   console.log(obj);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Total price ${price * quantity}`);
// }

// createProduct({ name: "qwe", price: 30, quantity: 10 }, logProduct);
// createProduct({ name: "qwe", price: 20, quantity: 10 }, logTotalPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`❌❌❌Transaction Limit is  ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (this.balance < amount) {
//       onError("❌❌❌Not Enough money in the account");
//       return;
//     }

//     this.balance -= amount;
//     onSuccess(`😁😁😁Transaction complete ${amount}, balance: ${this.balance}`);
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`❌❌❌Transaction Limit is  ${TRANSACTION_LIMIT}`);
//       return;
//     } else if (amount <= 0) {
//       onError(`Nice try BRO 🤣`);
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`💪💪💪Added ${amount}, balance: ${this.balance}`);
//   },
// };

// function handleSuccess(message) {
//   console.log(`Success!!! ${message}`);
// }

// function handleError(message) {
//   console.log(`Error! ${message}`);
// }

// account.withdraw(300, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// const logItems = (arr) =>
//   arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// logItems(["Mango", "Poly", "Ajax"]);

// const calculateAverage = (...arr) => {
//   let total = 0;
//   arr.forEach((value) => (total += value));
//   return total / arr.length;
// };

// console.log(
//   calculateAverage(1, 2, 2, 3, 3, 5, 4, 5, 65, 14, 6541, 6, 333333).toFixed(2)
// );

//-------------- Замыкание;

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff("Mango");

// mango("котлеты");

// const poly = makeSheff("Poly");
// poly("чай");

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// function createCounter() {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.2225685));
// console.log(rounder3(5.65892225685));

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit: function (amount) {
//       balance += amount;
//       return balance;
//     },

//     withdraw: function (amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return balance;
//       } else {
//         return "Not enough money";
//       }
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// }

// const account = createBankAccount(100);
// console.log(account.getBalance()); // 100

// account.deposit(50);
// console.log(account.getBalance());
// console.log(account.withdraw(20));
// console.log(account.withdraw(200));

// const numbers = [5, 10, 15, 20, 25];

// // numbers.forEach(function (number) {
// //   number *= 2;
// //   console.log("number", number);
// // });

// const doubleNumbers = numbers.map((number) => {
//   console.log(number);
//   return number * 3;
// });
// console.log(doubleNumbers);

// function calcSum(numOne, numTwo) {
//   if (numTwo === 1) {
//     return numOne;
//   } else {
//     return numOne * calcSum(numOne, numTwo - 1);
//   }
// }

// console.log(calcSum(2, 3));

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary);
// console.log(totalSalary);

// const sum = totalSalary.reduce((acc, number) => acc + number, 0);
// console.log(sum);

// const tweets = [
//   { id: "000", like: 5, tags: ["js", "nodejs"] },
//   { id: "001", like: 2, tags: ["html", "css"] },
//   { id: "002", like: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", like: 8, tags: ["css", "react"] },
//   { id: "004", like: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags);

// const tagStatus = allTags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );

// console.log(tagStatus);

// const numbers = [1, 9, 6, 2, 3];

// numbers.sort((a, b) => {
//   return b - a;
// });

// console.log(numbers);

// const copy = [...numbers];

// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24888,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 10,
//     price: 22698,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Civic",
//     type: "sedan",
//     amount: 9,
//     price: 214821,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 18,
//     price: 29001,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "CX-30",
//     type: "suv",
//     amount: 4,
//     price: 22145,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Corolla",
//     type: "sedan",
//     amount: 141,
//     price: 23888,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "RAV-4",
//     type: "suv",
//     amount: 1,
//     price: 28888,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "Land Cruiser",
//     type: "suv",
//     amount: 6,
//     price: 54888,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Focus",
//     type: "sedan",
//     amount: 33,
//     price: 19888,
//     onSale: false,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 11,
//     price: 36828,
//     onSale: true,
//   },
// ];

// const getModels = (cars) => {
//   return cars.map((car) => car.model);
// };

// console.table(getModels(cars));

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({
//     ...car,
//     price: car.price * (1 - discount),
//   }));
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// const filterByPrice = (cars, treshold) => {
//   return cars.filter((car) => car.price < treshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 20000));

// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => car.onSale);
// };

// console.table(getCarsWithDiscount(cars));

// const getCarsWithType = (cars, type) => {
//   return cars.filter((car) => car.type === type && car.make === "Honda");
// };

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.price - b.price);

// console.table(sortByAscendingAmount(cars));

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => (acc += amount), 0);

// console.log(getTotalAmount(cars));

// const getModelOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.log(getModelOnSale(cars));

// const str = "ldsfjhvsdkfhgvsklughsliughisdhgsiudfghilosdhgsdkfgjhdslfiguhdslf";

// const result = str.split("").reduce((acc, item) => {
//   // acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//   const keys = Object.keys(acc);
//   keys.includes(item) ? (acc[item] += 1) : (acc[item] = 1);

//   return acc;
// }, {});

// console.log(result);

// // const arr = ["Honda", "Audi", "BMW", "Skoda", "Ford", "Renault"];

// function logCars(arr) {
//   const result = arr.reduce((acc, car, idx) => {
//     return acc + `${idx + 1} - ${car}\n`;
//   }, "");
//   console.log(result);
// }

// console.log(logCars(["Honda", "Audi", "BMW", "Skoda", "Ford", "Renault"]));
// console.log(logCars([]));

// const students = [
//   { name: "Иван", scores: [5, 4, 4, 5] },
//   { name: "Светлана", scores: [3, 5, 4, 3] },
//   { name: "Алексей", scores: [4, 5, 5, 4] },
// ];

// function addScore(studentName, score) {
//   const student = students.find((s) => s.name === studentName);

//   student ? student.scores.push(score) : console.log("Error");
//   console.log(student);
// }

// function calculateAverageScore(studentName) {
//   const student = students.find((s) => s.name === studentName);

//   if (!student) {
//     console.log("Error1 : нет такого студента");
//     return;
//   }

//   const averageScore =
//     student.scores.reduce((acc, score) => acc + score, 0) /
//     student.scores.length;
//   console.log(averageScore);
// }

// function getTopStudent(students) {
//   if (students.length === 0) {
//     return "Список студентов пуст";
//   }

//   const studentsWithAverages = students.map((student) => {
//     const averageScore =
//       student.scores.reduce((acc, score) => acc + score, 0) /
//       student.scores.length;
//     return { name: student.name, averageScore };
//   });

//   const topStudent = studentsWithAverages.reduce(
//     (max, student) => (student.averageScore > max.averageScore ? student : max),
//     studentsWithAverages[0]
//   );

//   return topStudent.name;
// }

// addScore("Иван", 3);
// addScore("Иванннq", 3);

// calculateAverageScore("Иван");
// calculateAverageScore("Иванdddddd");

// const students = [
//   { name: "Иван", scores: [5, 4, 4, 5] },
//   {
//     name: "Светлана",
//     scores: [3, 5, 4, 3],
//   },
//   { name: "Алексей", scores: [4, 5, 5, 4] },
// ];

// function getTopStudent(students) {
//   if (students.length === 0) {
//     console.log("No students found");
//     return;
//   }

//   const studentsWithAverages = students.map((student) => {
//     const averageScore =
//       student.scores.reduce((acc, score) => acc + score, 0) /
//       student.scores.length;

//     return { name: student.name, averageScore };
//   });

//   console.log(studentsWithAverages);

//   const topStudent = studentsWithAverages.reduce(
//     (max, student) => (student.averageScore > max.averageScore ? student : max),
//     studentsWithAverages[0]
//   );

//   console.log(topStudent.name);
//   return topStudent.name;
// }

// getTopStudent(students);

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     this.color = color;
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();

// const hat = {
//   color: "blue",
//   updateColor,
// };
// hat.updateColor("orange");

// console.log(hat);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);

// const showThis = function () {
//   console.log("showThis -> this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);

// class User {
//   static counter = 0;
//   static addUser() {
//     this.counter += 1;
//     console.log(`Number of users ${this.counter}`);
//   }
//   #location;
//   constructor({ name, email, age = 18, location = "world", password } = {}) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.#location = location;
//     this.password = password;
//     User.addUser();
//   }

//   #getEmail() {
//     console.log(this.email);
//   }

//   get locale() {
//     return this.#location;
//   }

//   set locale(city) {
//     const value = prompt("Enter password");
//     this.#getEmail();
//     if (value === this.password) {
//       this.#location = city;
//       console.log(this.#location);
//     } else {
//       console.log("Hacker¡¡¡");
//     }
//   }
// }

// class Avatar extends User {
//   constructor({ name, email, password, location, age, damage }) {
//     super({ name, email, password, location, age });
//     this.damage = damage;
//   }
//   attack() {
//     console.log(`Attack with damage ${this.damage}`);
//   }
// }

// class Zombi extends User {
//   constructor({ name, email, password, location, age, poison }) {
//     super({ name, email, password, location, age });
//     this.poison = poison;
//   }

//   toBite() {
//     console.log(`Bite with ${this.poison}`);
//   }
// }

// const test = new Avatar({
//   name: "User A",
//   email: "test@gmail.com",
//   location: "Lviv",
//   password: "qwerty111",
//   damage: 700,
// });

// const test1 = new Zombi({
//   name: "User B",
//   email: "gmail@gmail.com",
//   age: 99,
//   poison: 500,
// });

// console.log(test);
// console.log(test1);

// const test2 = new User({
//   name: "User C",
//   email: "sdddddmail@gmail.com",
//   age: 50,
// });

// console.log(test1);
// console.log(test.#location);
// test.locale = "Kyiv";
// console.log(test);

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     (this.email = name),
//       (this.age = age),
//       (this.numberOfPosts = numberOfPosts),
//       (this.topics = topics);
//   }
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// // console.log(mango);
// console.log(mango.getInfo());

// mango.updatePostCount(5);
// console.log(mango.getInfo());
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//       return;
//     }
//     console.log("Такой товар уже есть");
//   }

//   removeItem(item) {
//     const idx = this.items.indexOf(item);

//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }
//   }
// }
// const storage = new Storage(["🍎", "🍉", "🍈", "🍇"]);
// const items = storage.getItems();
// console.table(items);

// storage.addItem("🍕");
// console.table(items);
// storage.addItem("🍕");
// console.table(items);

// storage.removeItem("🍉");
// console.table(items);

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login);
// mango.login = "Mangodoge";
// console.log(mango.login);

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   constructor(note) {
//     this.items = note;
//   }
//   addNote(note) {
//     const inArr = this.items.some(({ text }) => text === note.text);
//     if (!inArr) {
//       this.items.push(note);
//     }
//   }

//   updateNote(text, newPriority) {
//     const idx = this.items.findIndex(({ text: noteText }) => noteText == text);
//     if (!!~idx) {
//       this.items[idx].priority = newPriority;
//     }
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
// myNotes.addNote({ text: "Моя первая заметка", priority: Notes.Priority.LOW });
// myNotes.addNote({
//   text: "Моя вторая заметка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.updateNote("Моя вторая заметка", Notes.Priority.HIGH);
// console.log(myNotes.items);

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ email: "mango@mail.com", password: 11111111 });

// console.log(mango);

// mango.changeEmail("myNewEmail@mail.com");
// console.log(mango);

// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this.refs = this._getRefs(rootSelector);
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incremantBtn = document.querySelector("[data-increment]");
//   refs.decremantBtn = document.querySelector("[data-decrement]");
//   refs.value = refs.container.querySelector("[data-value]");

//   return refs;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter1 = new CounterPlugin({ rootSelector: "#counter-1", step: 10 });
// console.log("counter1", counter1);

// const counter2 = new CounterPlugin({ rootSelector: "#counter-2", step: 2 });
// console.log("counter2", counter2);

// class Hero {
//   constructor(name = "hero", xp = 0) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXP(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// class Mage extends Hero {
//   constructor(name, xp, spells) {
//     super(name, xp);
//     this.spells = spells;
//   }
// }

// const mango = new Warrior("mango", 1000, "alebarda");
// console.log("🚀  mango:", mango);
// mango.gainXP(1000);
// console.log("🚀  mango:", mango);
// mango.attack();
// mango.gainXP(1000);
// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(42);
// calc();

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}`);
// }

// const person1 = { name: "Johan", age: 22 };
// const person2 = { name: "Nick", age: 100 };

// bind(person1, logPerson)();

// const quantity = prompt("введите количество товаров");
// console.log("🚀  quantity:", quantity);

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= 100; i += 1) {
//   sum += i;
//   console.log(sum);
// }

// console.log(sum);
// let num1 = 10;
// let num2 = 5;

// for (let i = 1; i <= 10; i += 1) {
//   let row = "";
//   for (let j = 1; j <= 10; j += 1) {
//     row += `${i * j}\t`;
//   }
//   console.log(row);
// }

// let secretNumber = Math.floor(Math.random() * 100) + 1;
// console.log(secretNumber);
// let attempts = 0;

// function guessNumber() {
//   let userGuess = Number(prompt("Введите число"));
//   attempts += 1;

//   if (userGuess < secretNumber) {
//     alert("Загадочное число больше. Попробуйте еще раз");
//     guessNumber();
//   } else if (userGuess > secretNumber) {
//     alert("Загадочное число Меньше. Попробуйте еще раз");
//     guessNumber();
//   } else if (userGuess === secretNumber) {
//     alert(
//       `Поздравляю. Вы угадали число ${secretNumber} за ${attempts} попыток`
//     );
//   } else {
//     alert("Некорректный ввод. Пожалуйста, введите число.");
//     guessNumber();
//   }
// }

// guessNumber();

// function calculateFactorial() {
//   let n = parseInt(prompt("Введите число для вычисления факториала"));
//   console.log(n);
//   if (isNaN(n) || n < 0) {
//     console.log("Пожалуйста введите неотрицательное целое число");
//     return;
//   }
//   let factorial = 1;

//   for (let i = 1; i < n; i += 1) {
//     factorial *= i;
//   }
//   console.log(`Факториал числа ${n} равен ${factorial}`);
// }

// calculateFactorial();
// function calculateFactorial() {
//   let n = parseInt(prompt("Введите число для вычисления факториала:"));

//   // Проверка корректности ввода
//   if (isNaN(n) || n < 0) {
//     console.log("Пожалуйста, введите неотрицательное целое число.");
//     return;
//   }

//   // Инициализация переменной для хранения результата
//   let factorial = 1;

//   // Вычисление факториала с помощью цикла
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//   }

//   // Вывод результата
//   console.log(`Факториал числа ${n} равен ${factorial}`);
// }

// // Запуск функции
// calculateFactorial()
// const stars = 6;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 40;
// } else if (stars === 4) {
//   price = 50;
// } else if (stars === 5) {
//   price = 60;
// } else {
//   console.log("Errorrrrrrr");
// }
// console.log(price);

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 40;
//     break;

//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 50;
//     break;

//   default:
//     console.log("Errorrrrrrrrrrrrrrrrrr");
// }

// console.log(price);

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 9;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`ЗП работника номер ${i} - ${salary}`);
//   totalSalary += salary;
// }
// console.log(totalSalary);

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    total += i;
  }
}

console.log("total:", total);
