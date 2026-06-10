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
