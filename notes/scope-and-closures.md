# Область видимості та замикання

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Локальні змінні та область видимості

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 848–862.

```javascript
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

```

## Замикання: лічильник

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 863–879.

```javascript
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

```
