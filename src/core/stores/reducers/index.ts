import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import moviesReducer from "./moviesReducer";

export interface FluxStandardAction {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
});
