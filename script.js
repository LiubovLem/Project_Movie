'use strict';

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
        remembersMyFilms: function() {
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
    },
        detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('You have watched a small number of filns');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Yoa are a classic spectacor');        
        } else if (personalMovieDB.count >= 30) {
            console.log('Yoa are a film fanatic');        
        } else {
            console.log('Error');        
        }
    },
        showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }   
    },
        toggleVisibleMyDB: function () {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++){
                let genre = prompt(`You favourite genre in order ${i}`); 
                
                if (genre === '' || genre == null) {
                    console.log('You write incorrect data or do not write it at all');
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }                
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Favourite style ${i+1} - is ${item}`);
            });
        }
};

