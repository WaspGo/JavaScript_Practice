"use strict";

// const answers = [];

// answers[1] = prompt("Один із ваших недавньо переглянутих фільмів", "");
// answers[2] = prompt("На скільки ви його оціните", "");
// answers[3] = prompt("Один із ваших недавньо переглянутих фільмів", "");
// answers[4] = prompt("На скільки ви його оціните", "");

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Скільки фільмів ви передивились?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Скільки фільмів ви передивились?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt(
          "Один із ваших недавньо переглянутих фільмів",
          "",
        ).trim(),
        b = prompt("На скільки ви його оціните", "");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Переглянуто доволі мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Ви класичний глядач");
    } else if (personalMovieDB.count >= 30) {
      console.log("Ви кіноман");
    } else {
      console.log("Виникла помилка");
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш улюбленик жанр під номером ${i}`, "");
      if (genre === "" || genre === null) {
        console.log("Ви ввели некоректні дані або не ввели їх зовсім");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюблений жанр #${i + 1} - це ${item} `);
    });
  },
  toggleVisibleMyDB: function () {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
};

// personalMovieDB.movies[answers[1]] = answers[2];
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
