import { FluxStandardAction } from ".";
import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_FINISHED,
} from "../types";

export interface IMovieSummary {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMoviesState {
  data: IMovieSummary[];
  isLoading: boolean;
  isError: boolean;
  total: number;
}

export interface IMoviesResponse {
  data: IMovieSummary[];
  total: number;
}

export interface IMoviesAction extends FluxStandardAction {
  payload?: IMoviesResponse | void;
}

const initialState: IMoviesState = {
  data: [],
  isLoading: false,
  isError: false,
  total: 0,
};

function moviesReducer(
  state = initialState,
  action: IMoviesAction
): IMoviesState {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MOVIES_FINISHED:
      return {
        ...state,
        data: action.payload?.data!,
        total: action.payload?.total!,
        isLoading: false,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default moviesReducer;
