"use strict";

if (4 == 9) {
  console.log("OK!");
} else {
  console.log("Error!");
}
// const num = 50;
// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Too much");
// } else {
//   console.log("OK!");
// }

// (num === 50) ? console.log("OK!") : console.log("Error!");

const num = 50;

switch (num) {
  case 49:
    console.log("WRONG!");
    break;
  case 100:
    console.log("WRONG!");
    break;
  case 51:
    console.log("YES!");
    break;
  default:
    console.log("NEVERMIND!");
    break;
}

let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }
// do {
//   console.log(num);
//   num++;
// } while (num < 55);

for (let i = 1; i <= 8; i++) {
  console.log(num);
  num++;
}

//tast 3.1
for (let i = 5; i <= 10; i++) {
  console.log(i);
}
//task 3.2
for (let i = 20; i >= 10; i--) {
  console.log(i);
  if (i === 13) {
    break;
  }
}
//task 3.3
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }

//task 3.4
for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
//task 3.5
const arrayOfNumbers = [];
for (let i = 0; i <= 5; i++) {
  arrayOfNumbers[i] = i + 5;
}
console.log(arrayOfNumbers);

//tast 4.1 result array
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}
console.log(result);

//task 4.2 switch data
const data = [5, 10, "Shopping", 20, "Homework"];

for (let i = 0; i < data.length; i++) {
  // switch (typeof data[i]) {
  //   case "string":
  //     data[i] = data[i] + " " + "- done";
  // }
  if (typeof data[i] === "string") {
    data[i] = data[i] + " " + "- done";
  }
  if (typeof data[i] === "number") {
    data[i] = data[i] * 2;
  }
}
console.log(data);

//task 4.3 reverse data
const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];
for (i = 0; i < data.length; i++) {
  result[i] = data[data.length - (i + 1)];
}
console.log(result);

//task 5 making a tree
const lines = 5;
let result = "";

for (let i = 1; i <= lines * 2; i++) {
  for (let k = 0; k < (lines * 2 - i) / 2; k++) {
    result += " ";
  }
  if (i % 2 == 0) {
    i++;
  }

  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}
showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
  return a + b;
}
console.log(calc(10, 20));
console.log(calc(2, 8));
console.log(calc(11, 5));

function ret() {
  let num = 50;
  return num;
}
const anatherNum = ret();
console.log(anatherNum);

const logger = function () {
  console.log("hello");
};
logger();

const calc = (a, b) => a + b;

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log("done");
}
test();

//task 6.1
function sayHello(name) {
  return "Hello," + " " + name + "!";
}

console.log(sayHello("Dmytro"));

//tast 6.2
function returnNeighboringNumbers(num) {
  const numbers = [];
  numbers[0] = num - 1;
  numbers[1] = num;
  numbers[2] = num + 1;
  return numbers;
}
console.log(returnNeighboringNumbers(6));

//task 6.3
function getMathResult(numFirst, numSecond) {
  let result = "";
  let k = numFirst;
  result = result + String(numFirst);
  for (let i = 1; i < numSecond; i++) {
    k = numFirst + k;
    result += "---" + String(k);
  }
  if (numSecond <= 0 || typeof numSecond != "number") {
    return numFirst;
  } else return result;
}
console.log(getMathResult(5, 5));

const str = "tEst";
const arr = [1, 2, 4];

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello World";

console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

// task 7.1
function calculateVolumeAndArea(edgeOfCube) {
  const volumeOfCube = edgeOfCube * edgeOfCube * edgeOfCube;
  const areaOfCube = 6 * (edgeOfCube * edgeOfCube);
  if (
    volumeOfCube == "" ||
    areaOfCube == "" ||
    typeof volumeOfCube != "number" ||
    typeof areaOfCube != "number" ||
    volumeOfCube == null ||
    areaOfCube == null ||
    volumeOfCube % 1 != 0 ||
    areaOfCube % 1 != 0 ||
    volumeOfCube <= 0 ||
    areaOfCube <= 0
  ) {
    return "При вичислення виникла помилка";
  } else {
    return `Об'єм куба: ${volumeOfCube}, площа всій поверхні: ${areaOfCube}`;
  }
}
console.log(calculateVolumeAndArea(5));

//task 7.2
function getCoupeNumber(number) {
  if (
    number % 1 != 0 ||
    number < 0 ||
    typeof number == "string" ||
    number == null ||
    number == ""
  ) {
    return "Помилка. Перевірте правильність введеного номера місця";
  }
  if (number > 36 || number == 0) {
    return "Таких місць у вагоні не існує";
  }
  if (number <= 4) {
    return 1;
  } else if (number <= 8) {
    return 2;
  } else if (number <= 12) {
    return 3;
  } else if (number <= 16) {
    return 4;
  } else if (number <= 20) {
    return 5;
  } else if (number <= 24) {
    return 6;
  } else if (number <= 28) {
    return 7;
  } else if (number <= 32) {
    return 8;
  } else if (number <= 36) {
    return 9;
  }
}
console.log(getCoupeNumber(12));

//task 8.1
function getTimeFromMinutes(minutes) {
  if (
    minutes < 0 ||
    minutes === null ||
    minutes > 600 ||
    typeof minutes !== "number" ||
    minutes % 1 !== 0
  ) {
    return "Помилка. Перевірте дані";
  }

  const hours = Math.floor(minutes / 60);
  const remMinutes = minutes % 60;

  function getHoursWord(hours) {
    if (hours === 1) {
      return "година";
    }
    if (hours >= 2 && hours <= 4) {
      return "години";
    } else return "годин";
  }
  const hoursWord = getHoursWord(hours);
  return `Це ${hours} ${hoursWord} та ${remMinutes} хвилин`;
}

console.log(getTimeFromMinutes(0)); // "Це 0 годин та 0 хвилин"
console.log(getTimeFromMinutes(60)); // "Це 1 година та 0 хвилин"
console.log(getTimeFromMinutes(120)); // "Це 2 години та 0 хвилин"
console.log(getTimeFromMinutes(150)); // "Це 2 години та 30 хвилин"
console.log(getTimeFromMinutes(300)); // "Це 5 годин та 0 хвилин"
console.log(getTimeFromMinutes(660)); // "Це 11 годин та 0 хвилин"

//task 8.2
function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  }

  if (a < b) {
    a = b;
  }
  if (a < c) {
    a = c;
  }
  if (a < d) {
    a = d;
  }
  return a;
}

console.log(findMaxNumber(1, 6, 8, 7));

//task 9
function fib(a) {
  if (typeof a != "number" || a <= 0) {
    return "";
  }
  if (a == 1) {
    return "0";
  }
  let numbers = [a];
  let c = 0;
  let d = 1;
  numbers[0] = c;
  numbers[1] = d;
  let result = `${numbers[0]} ${numbers[1]}`;
  for (i = 2; i < a; i++) {
    c = c + d;
    d = d + c;
    numbers[i] = c;
    result += ` ${numbers[i]}`;
    numbers[i + 1] = d;
    i++;
    result += ` ${numbers[i]}`;
  }
  return result;
}
console.log(fib(15));

//
function learnJS(lang, callback) {
  console.log(`Я вчу: ${lang}`);
  callback();
}
function done() {
  console.log("Я пройшов цей урок!");
}
learnJS("JavaScript", done);

//
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
  // makeTest: function () {
  //   console.log("test");
  // },
};
// options.makeTest();
// const { border, background } = options.colors;
// console.log(border)
console.log(options.name);

// delete options.name;
console.log(options);
// let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Властивість ${i} має значення ${options[key][i]}`);
      // counter++;
    }
  } else {
    console.log(`Властивість ${key} має значення ${options[key]}`);
    // counter++;
  }
}
// console.log(`У об'єкті знаходиться: ${counter} елементів`);
console.log(Object.keys(options).length);

//
const arr = [1, 2, 13, 8, 6];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} всередені масива ${arr}`);
});

// arr.pop();
arr.push(10);
console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
for (let value of arr) {
  console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

//
let a = 5,
  b = a;
b = b + 5;
console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1,
};
const copy = obj; // передає посилання
copy.a = 10;
console.log(copy);
console.log(obj);

function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
// newNumbers.c.x = 10; "c додане як посилання"
console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "sadjansdn";
console.log(newArray);
console.log(oldArray);

const video = ["youtube", "something", "anothersomething"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "facebook", "telegram"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];

const newAaray = [...array];

const q = {
  one: 1,
  two: 2,
};
console.log(q);
const newObj = { ...q };
console.log(newObj);

//task 10.1
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ua", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    const langStrt = languages.join(" ").toUpperCase();

    console.log(`Мені ${age} та я володію мовами: ${langStrt}`);
  },
};

function showExperience(plan) {
  const { exp } = plan.skills;
  console.log(exp);
}
showExperience(personalPlanPeter);

//task 10.2
function showProgrammingLangs(plan) {
  for (let key in plan) {
    if (typeof plan[key] === "object") {
      const newObj = { ...personalPlanPeter.skills };
      for (let i in newObj) {
        if (typeof newObj[i] === "object") {
          delete newObj.languages;
          for (let k in newObj[i]) {
            console.log(`Мова ${k} вивчена на ${newObj[i][k]}`);
          }
        }
      }
    }
  }
}
showProgrammingLangs(personalPlanPeter);

//task 10.3
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

//task 11.1
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let familyCounter = `${family[0]}`;
  if (family.length === 0 || family[0] === "") {
    console.log("Сімʼя пуста");
  } else {
    for (let i = 1; i < family.length; i++) {
      familyCounter += ` ${family[i]}`;
    }
    console.log(`Сімʼя складається з: ${familyCounter}`);
  }
}

showFamily(family);

//task 11.2
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach(function (item, i, arr) {
    console.log(`${item.toLowerCase()}`);
  });
}
standardizeStrings(favoriteCities);

//task 12.3
const someString = "This is some strange string";

function reverse(str) {
  let a = str.length;
  let b = str.length - 1;
  let final = ``;
  if (typeof str !== "string") {
    console.log("Помилка!");
  } else {
    for (let i = 0; i < str.length; i++) {
      final += `${str.slice(b, a)}`;
      a--;
      b--;
    }
    console.log(final);
  }
}
reverse(someString);

//task 12.4
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "THB", "CNY"];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
  let stringCurrencies = `Доступні валюти: \n`;
  const cleanArr = [];
  const a = arr.indexOf(missingCurr);
  delete arr[a];

  arr.forEach(function (item) {
    if (item !== "") {
      cleanArr.push(item);
    }
  });
  if (allCurrencies.length === 0) {
    console.log("Немає доступних валют");
  } else {
    for (let i = 0; i < cleanArr.length; i++) {
      stringCurrencies += ` ${cleanArr[i]} \n`;
    }
    console.log(stringCurrencies);
  }
}
availableCurr(allCurrencies, "THB");

//
const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello!");
  },
};

const john = Object.create(soldier); // створює обʼєкт та звʼязує з прототипом (здебільшого використовують це)

// const john = {
//   health: 100,
// };

// john.__proto__ = soldier; // застарілий метод

// Object.setPrototypeOf(john, soldier); // вже є обʼєкт та назначаємо йому прототип

console.log(john.armor);
john.sayHello();

//task 13
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
    { ksmad: 10, sajdn: 100 },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let shopArea = 0;

  for (let i = 0; i < data.shops.length; i++) {
    if (
      data.shops[i].width === undefined ||
      data.shops[i].length === undefined
    ) {
      continue;
    }
    shopArea = shopArea + data.shops[i].width * data.shops[i].length;
  }

  const shopVolume = shopArea * data.height;
  let expensesAmount = shopVolume * data.moneyPer1m3;
  console.log(shopArea);
  console.log(shopVolume);
  console.log(expensesAmount);
  if (expensesAmount > data.budget) {
    console.log("Нестача бюджету");
  } else {
    console.log("Бюджету достатньо");
  }
}
isBudgetEnough(shoppingMallData);

//task 14
const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  let finalTeam = [];
  const firstTeam = arr.slice(0, 3);
  const secondTeam = arr.slice(3, 6);
  const thirdTeam = arr.slice(6, 9);
  const remainingStudents = arr.slice(9);
  let messageAboutStudents = `Студенти, що залишилися:`;
  if (arr.length <= 9) {
    messageAboutStudents += ` -`;
  } else {
    messageAboutStudents += ` ${remainingStudents[0]}`;
    for (let i = 1; i < remainingStudents.length; i++) {
      messageAboutStudents += `, ${remainingStudents[i]}`;
    }
  }
  finalTeam.push(firstTeam, secondTeam, thirdTeam, `${messageAboutStudents}`);

  console.log(finalTeam);
}
sortStudentsByGroups(students);

//
// To String

// 1)
console.log(typeof String(5)); // Рідко використовується

// 2)
console.log(typeof (5 + ""));

// 3)
console.log(typeof `${5}`);

// To Number

// 1)
console.log(typeof Number("5")); // Рідко використовується

// 2)
console.log(typeof +"5");

// 3)
console.log(typeof parseInt("15px", 10));

let answ = +prompt("Hello", "");

// To Boolean

// 0, "", null, undefined, NaN Завжди перетворюється у False

// 1)
let swither = null;

if (swither) {
  console.log("Working...");
}

swither = 1;
if (swither) {
  console.log("Working....");
}

// 2)
console.log(typeof Boolean("4"));

// 3)
console.log(typeof !!"444");

//
let number = 5;

function logNumber() {
  let number = 4;

  console.log(number);
}

number = 6;
logNumber();

number = 8;
logNumber();

//
function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//task 15
// Виправлений код -
const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Відкрито") : (answer = "Закрито");

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
    +average.slice(0, -1)
  ) {
    return "Ціна нижче середньої";
  } else {
    return "Ціна вище середньої";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice,
  ),
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{ name: "Mike", age: 32 }];
  return copy;
}

console.log(transferWaitors(restorantData));

//
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3));

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

//
let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
    semi: {
      students: [
        {
          name: "Test",
          progress: 100,
        },
      ],
    },
  },
};

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;

      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subcourse of Object.values(course)) {
        students += subcourse.length;
        for (let i = 0; i < subcourse.length; i++) {
          total += subcourse[i].progress;
        }
      }
    }
  }

  return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];
    for (let subData of Object.values(data)) {
      const subDataArray = getTotalProgressByRecursion(subData);
      total[0] += subDataArray[0];
      total[1] += subDataArray[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

function factorial(data) {
  if (typeof data !== "number" || data % 2 !== 0) {
    return "Введіть число!";
  } else if (data <= 0) {
    return 1;
  }
}
console.log(factorial(0));
