import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import moviesReducer from "./moviesReducer";
import suggestionReducer from "./suggestionReducer";

export interface FluxStandardAction {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  suggestion: suggestionReducer,
});
