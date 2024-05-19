import axios from "axios";
import { AllMovies_type, page_type, search_type } from "../Type/type";

export const getMovies = (actionType, word, Page_num) => {
    return async (dispatch) => {
        let url = '';
        switch(actionType) {
            case AllMovies_type:
                url = 'https://api.themoviedb.org/3/movie/popular?api_key=9544246f59fa1bf2818edc3fc4629fa2&language=en-US&page=1';
                break;
            case search_type:
                url = `https://api.themoviedb.org/3/search/movie?api_key=9544246f59fa1bf2818edc3fc4629fa2&query=${word}&language=ar`;
                break;
            case page_type:
                url = `https://api.themoviedb.org/3/movie/popular?api_key=9544246f59fa1bf2818edc3fc4629fa2&language=en-US&page=${Page_num}`;
                break;
            default:
                throw new Error('Invalid action type');
        }
        
        try {
            const res = await axios.get(url);
            // send to reducer 
            dispatch({type: AllMovies_type, data: res.data.results, pages: res.data.total_pages});
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }
}