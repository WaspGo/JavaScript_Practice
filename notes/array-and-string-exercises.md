# Задачі: масиви та рядки

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Список членів сім’ї

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 617–633.

```javascript
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

```

## Нормалізація назв міст

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 634–643.

```javascript
//task 11.2
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach(function (item, i, arr) {
    console.log(`${item.toLowerCase()}`);
  });
}
standardizeStrings(favoriteCities);

```

## Розворот рядка

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 644–663.

```javascript
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

```

## Список доступних валют

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 664–690.

```javascript
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

```

## Розподіл студентів на групи

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 765–800.

```javascript
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

```

## Сортування цифр числа за спаданням

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 1067–1082.

```javascript
function descendingOrder(n) {
  //...
  let a = [];
  let k = 1;
  b = `${n}`;
  for (let i = 0; i < b.length; i++) {
    a[i] = b.slice(i, k);
    k++;
  }
  a = a.sort((x, y) => y - x); // сортуємо один раз, коли масив готовий
  a = a.join("");
  a = Number(a);

  return a;
}
console.log(descendingOrder(782364));
```
