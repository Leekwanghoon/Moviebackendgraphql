// export let people = [     {         id: 0,         name: "Mun",         age:
// 42,         gender: "female"     }, {         id: 1,         name: "Park",
// age: 30,         gender: "female"     }, {         id: 2,         name:
// "Choi",         age: 17,         gender: "female"     }, {         id: 3,
// name: "Park",         age: 37,         gender: "female"     }, {         id:
// 4,         name: "Kim",         age: 27,         gender: "male"     } ]
// export const getById = id => {     const filteredPeople =
// people.filter(person => id === person.id);     return filteredPeople[0] }
// export let movies = [     {         id: 0,         name: "Star-Wars",
// score: 4     }, {         id: 1,         name: "KingsMan",         score: 9
// }, {         id: 2,         name: "Crime Wars",         score: 17     }, {
// id: 3,         name: "HarryPotter",         score: 100     }, {         id:
// 4,         name: "Ring's King",         score: 200     }, {         id: 5,
// name: "Friends",         score: 21     }, {         id: 6,         name:
// "Sparta",         score: 32     } ] export const getMovieById = id => {
// const filteredMovie = movies.filter(movie => id === movie.id);     return
// filteredMovie[0] } export const deleteMovie = (id) => {     const cleanMovies
// = movies.filter(movie => movie.id !== id)     if (movies.length >
// cleanMovies.length) {         movies = cleanMovies;         return true;
// } else {         return false     } } export const addMovie = (name, score)
// => {     const newMovie = {         id:`${movies.length + 1}`,         name,
// score     };     movies.push(newMovie);     return newMovie; }


import axios from 'axios';

const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;


export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: {movies}
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating
        }
    });
    return movies;
}



export const getMovie = async id => {
    const {
        data: {
            data: {movie}
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    });
    return movie
}

export const getSuggestions = async id => {
    const {
        data: {
            data: {movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    });
    return movies;
}