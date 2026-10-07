# Рядки, числа та перетворення типів

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Методи рядків та перетворення чисел

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 238–261.

```javascript
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

```

## Перетворення на String, Number та Boolean

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 801–847.

```javascript
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

```
