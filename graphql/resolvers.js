// import {getById, people, movies, getMovieById, addMovie, deleteMovie} from '../db/db';

// const resolvers = {
//     Query: {
//         people: () => people,
//         person: (_, {id}) => getById(id),
//         movies: () => movies,
//         oneMovie: (_, {id}) => getMovieById
//     },
//     Mutation: {
//         addMovie:(_,{name,score}) => addMovie(name,score),
//         deleteMovie:(_,{id}) => deleteMovie(id)
//     }
// }

// export default resolvers;

//영화

import { getMovies,getMovie,getSuggestions } from '../db/db';

const resolvers = {
    Query: {
        movies:(_,{limit,rating}) => getMovies(limit,rating),
        movie:(_,{id}) => getMovie(id),
        suggestions:(_,{id}) => getSuggestions(id)
    }
}

export default resolvers;