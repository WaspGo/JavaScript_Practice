# Задачі: об’єкти та вкладені дані

[До навігатора](../README.md)

Це оригінальні навчальні записи, розділені за темами. Блоки не слід об’єднувати в один скрипт: назви змінних можуть повторюватися. У деяких розв’язках залишилися навчальні помилки.

## План навчання: вкладені дані та методи

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 569–616.

```javascript
//task 10.1
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ua", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    const langStrt = languages.join(" ").toUpperCase();

    console.log(`Мені ${age} та я володію мовами: ${langStrt}`);
  },
};

function showExperience(plan) {
  const { exp } = plan.skills;
  console.log(exp);
}
showExperience(personalPlanPeter);

//task 10.2
function showProgrammingLangs(plan) {
  for (let key in plan) {
    if (typeof plan[key] === "object") {
      const newObj = { ...personalPlanPeter.skills };
      for (let i in newObj) {
        if (typeof newObj[i] === "object") {
          delete newObj.languages;
          for (let k in newObj[i]) {
            console.log(`Мова ${k} вивчена на ${newObj[i][k]}`);
          }
        }
      }
    }
  }
}
showProgrammingLangs(personalPlanPeter);

//task 10.3
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

```

## Розрахунок бюджету торгового центру

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 713–764.

```javascript
//task 13
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
    { ksmad: 10, sajdn: 100 },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let shopArea = 0;

  for (let i = 0; i < data.shops.length; i++) {
    if (
      data.shops[i].width === undefined ||
      data.shops[i].length === undefined
    ) {
      continue;
    }
    shopArea = shopArea + data.shops[i].width * data.shops[i].length;
  }

  const shopVolume = shopArea * data.height;
  let expensesAmount = shopVolume * data.moneyPer1m3;
  console.log(shopArea);
  console.log(shopVolume);
  console.log(expensesAmount);
  if (expensesAmount > data.budget) {
    console.log("Нестача бюджету");
  } else {
    console.log("Бюджету достатньо");
  }
}
isBudgetEnough(shoppingMallData);

```

## Ресторан: меню, ціни та копіювання

Джерело: [початковий конспект](../archive/early-javascript-notebook.js.txt), рядки 880–945.

```javascript
//task 15
// Виправлений код -
const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Відкрито") : (answer = "Закрито");

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
    +average.slice(0, -1)
  ) {
    return "Ціна нижче середньої";
  } else {
    return "Ціна вище середньої";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice,
  ),
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{ name: "Mike", age: 32 }];
  return copy;
}

console.log(transferWaitors(restorantData));

```
