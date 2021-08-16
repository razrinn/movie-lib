import { FluxStandardAction } from ".";
import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_ERROR,
  FETCH_MOVIE_DETAILS_FINISHED,
} from "../types";

interface IRating {
  Source: string;
  Value: string;
}

export interface IMovieDetail {
  Title: string;
  Year: string;
  Type: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Production: string;
  Poster: string;
  Ratings: IRating[];
}

export interface IMovieState {
  data?: IMovieDetail;
  isLoading: boolean;
  isError: boolean;
}

export interface IMovieResponse {
  data: IMovieDetail;
}

export interface IMovieAction extends FluxStandardAction {
  payload?: IMovieResponse | void;
}

const initialState: IMovieState = {
  data: undefined,
  isLoading: false,
  isError: false,
};

function movieReducer(state = initialState, action: IMovieAction): IMovieState {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MOVIE_DETAILS_FINISHED:
      return {
        ...state,
        data: action.payload?.data!,
        isLoading: false,
      };
    case FETCH_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default movieReducer;
