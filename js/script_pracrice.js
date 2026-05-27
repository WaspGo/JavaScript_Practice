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

//tast 1
for (let i = 5; i <= 10; i++) {
  console.log(i);
}
//task 2
for (let i = 20; i >= 10; i--) {
  console.log(i);
  if (i === 13) {
    break;
  }
}
//task 3
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }

//task 4
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
//task 5
const arrayOfNumbers = [];
for (let i = 0; i <= 5; i++) {
  arrayOfNumbers[i] = i + 5;
}
console.log(arrayOfNumbers);

//tast result array
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}
console.log(result);

//task switch data
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

//task reverse data
const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];
for (i = 0; i < data.length; i++) {
  result[i] = data[data.length - (i + 1)];
}
console.log(result);

//task making a tree
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
