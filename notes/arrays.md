# Масиви та їхні методи

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Копіювання масиву циклом

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 98–106.

```javascript
//tast 4.1 result array
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}
console.log(result);

```

## Зміна елементів залежно від типу

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 107–123.

```javascript
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

```

## Зворотний порядок елементів

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 124–131.

```javascript
//task 4.3 reverse data
const data = [5, 10, "Shopping", 20, "Homework"];
const result = [];
for (i = 0; i < data.length; i++) {
  result[i] = data[data.length - (i + 1)];
}
console.log(result);

```

## Сортування, forEach, push, for...of, split та join

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 452–483.

```javascript
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

```
