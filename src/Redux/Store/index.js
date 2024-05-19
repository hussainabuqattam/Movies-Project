import { MoviesReducer } from "../Reducer/MoviesReducer";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";


export const  store = createStore(MoviesReducer, applyMiddleware(thunk));