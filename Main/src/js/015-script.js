// LESSON 15


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');


    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('ERROR');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Типичный зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('KINOMAN');
} else {
    console.log('ERROR');
}

console.log(personalMovieDB);