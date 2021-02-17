
import moviesData from "../Movies";

const initialState ={
    movies:moviesData


}

const reducer =(state = initialState ,action) => {
    switch(action.type){
        case "DELETE_MOVIE":
            return{
                ...state,
                movies : state.movies.filter(
                (movie)=>movie.id!==action.payload.movieId

                ),
            };

            case "WATCHED_MOVIE":
                const index = state.movies.findIndex(
                    (movie) => movie.id === action.payload.movie.id
                  );
                  const newState = [...state.movies];
                  newState[index] = action.payload.movie;
                  return {
                    ...state,
                    movies: state.movies.map((movie) =>
                    movie.id === newState.id ? newState : movie
                    ),
                  
                  };

            case "ADD_MOVIE":
                const { newMovie } = action.payload;
                newMovie.id = state.movies[state.movies.length - 1].id + 1;
            return{
                ...state,
                movies: [...state.movies, action.payload.newMovie],

                
            };

            default:
            return state;
    }

};

export default reducer;