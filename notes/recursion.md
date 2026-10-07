# Рекурсія

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## Піднесення до степеня циклом

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 946–955.

```javascript
//
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3));

```

## Піднесення до степеня рекурсією

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 956–963.

```javascript
function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

```

## Середній прогрес: ітерація та рекурсія

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 964–1051.

```javascript
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

```

## Факторіал

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 1052–1066.

```javascript
function factorial(x) {
  if (typeof x !== "number" || x % 1 !== 0) {
    return "Введіть число!";
  } else if (x <= 0) {
    return 1;
  }

  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log(factorial(5));

```
