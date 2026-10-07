# Функції та callback

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Оголошення функцій, параметри та return

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 152–180.

```javascript
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

```

## Стрілкова функція

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 181–182.

```javascript
const calc = (a, b) => a + b;

```

## Повернення результату та композиція викликів

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 183–205.

```javascript
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

```

## Callback-функції

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 407–416.

```javascript
//
function learnJS(lang, callback) {
  console.log(`Я вчу: ${lang}`);
  callback();
}
function done() {
  console.log("Я пройшов цей урок!");
}
learnJS("JavaScript", done);

```
