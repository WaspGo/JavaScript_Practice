# Об’єкти, копіювання та прототипи

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Вкладені об’єкти, перебір і деструктуризація

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 417–451.

```javascript
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

```

## Значення та посилання

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 484–499.

```javascript
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

```

## Поверхневе копіювання та Object.assign

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 500–534.

```javascript
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

```

## Копіювання масиву через slice

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 535–541.

```javascript
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "sadjansdn";
console.log(newArray);
console.log(oldArray);

```

## Spread у масивах, аргументах та об’єктах

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 542–568.

```javascript
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

```

## Прототипи: Object.create

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 691–712.

```javascript
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

```
