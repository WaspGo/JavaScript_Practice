"use strict";

const numberOfFilms = +prompt("Скільки фільмів ви передивились?", "");

// const answers = [];

// answers[1] = prompt("Один із ваших недавньо переглянутих фільмів", "");
// answers[2] = prompt("На скільки ви його оціните", "");
// answers[3] = prompt("Один із ваших недавньо переглянутих фільмів", "");
// answers[4] = prompt("На скільки ви його оціните", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// personalMovieDB.movies[answers[1]] = answers[2];
// personalMovieDB.movies[answers[3]] = answers[4];

const a = prompt("Один із ваших недавньо переглянутих фільмів", ""),
  b = prompt("На скільки ви його оціните", ""),
  c = prompt("Один із ваших недавньо переглянутих фільмів", ""),
  d = prompt("На скільки ви його оціните", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
