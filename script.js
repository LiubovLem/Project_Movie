'use strict';

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


    
function remembersMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
   
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

remembersMyFilms();

// let i = 0; i++; {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     while (a != null && b != null && a != '' && b != '' && a.length < 50) {
//           personalMovieDB.movies[a] = b;
//           console.log('done');
//     }
// }


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You have watched a small number of filns');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Yoa are a classic spectacor');        
    } else if (personalMovieDB.count >= 30) {
        console.log('Yoa are a film fanatic');        
    } else {
        console.log('Error');        
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }   
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`You favourite genre in order ${1}`); 
    }
}

writeYourGenres();

console.log(personalMovieDB);
    
