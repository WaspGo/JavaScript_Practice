# Задачі: числа та обчислення

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Привітання

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 206–212.

```javascript
//task 6.1
function sayHello(name) {
  return "Hello," + " " + name + "!";
}

console.log(sayHello("Dmytro"));

```

## Сусідні числа

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 213–222.

```javascript
//tast 6.2
function returnNeighboringNumbers(num) {
  const numbers = [];
  numbers[0] = num - 1;
  numbers[1] = num;
  numbers[2] = num + 1;
  return numbers;
}
console.log(returnNeighboringNumbers(6));

```

## Числова послідовність

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 223–237.

```javascript
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

```

## Об’єм і площа куба

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 262–284.

```javascript
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

```

## Номер купе

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 285–320.

```javascript
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

```

## Хвилини в години

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 321–354.

```javascript
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

```

## Максимум із чотирьох чисел

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 355–379.

```javascript
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

```

## Послідовність Фібоначчі

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 380–406.

```javascript
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

```
