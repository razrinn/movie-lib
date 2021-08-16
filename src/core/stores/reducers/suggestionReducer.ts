import {
  FETCH_SUGGESTION,
  FETCH_SUGGESTION_ERROR,
  FETCH_SUGGESTION_FINISHED,
} from "../types";
import { IMoviesAction, IMoviesState } from "./moviesReducer";

const initialState: IMoviesState = {
  data: [],
  isLoading: false,
  isError: false,
  total: 0,
  isFetchingMore: false,
};

function suggestionReducer(
  state = initialState,
  action: IMoviesAction
): IMoviesState {
  switch (action.type) {
    case FETCH_SUGGESTION:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUGGESTION_FINISHED:
      return {
        ...state,
        data: action.payload?.data!,
        total: action.payload?.total!,
        isLoading: false,
      };
    case FETCH_SUGGESTION_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default suggestionReducer;
