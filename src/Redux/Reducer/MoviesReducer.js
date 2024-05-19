import { AllMovies_type } from "../Type/type"
const initalValue = {movies:[], pages:0}

export const MoviesReducer = (state = initalValue, action) =>{
      switch(action.type) {
         case AllMovies_type :
            return{movies: action.data, pages: action.pages}
            default : 
            return state;
      }

}