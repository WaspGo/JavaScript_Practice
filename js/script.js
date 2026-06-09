"use strict";

let numberOfFilms;

// const answers = [];

// answers[1] = prompt("Один із ваших недавньо переглянутих фільмів", "");
// answers[2] = prompt("На скільки ви його оціните", "");
// answers[3] = prompt("Один із ваших недавньо переглянутих фільмів", "");
// answers[4] = prompt("На скільки ви його оціните", "");

function start() {
  numberOfFilms = +prompt("Скільки фільмів ви передивились?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Скільки фільмів ви передивились?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// personalMovieDB.movies[answers[1]] = answers[2];
// personalMovieDB.movies[answers[3]] = answers[4];

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один із ваших недавньо переглянутих фільмів", ""),
      b = prompt("На скільки ви його оціните", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Переглянуто доволі мало фільмів");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
  } else {
    console.log("Виникла помилка");
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш улюбленик жанр під номером ${i}`, "");
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);
