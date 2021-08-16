import axiosInstance from "core/api/config";
import { ThunkDispatch } from "redux-thunk";
import { IMovieAction, IMovieState } from "../reducers/movieReducer";
import {
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_ERROR,
  FETCH_MOVIE_DETAILS_FINISHED,
} from "../types";

export const getMovieDetail =
  (id: string) =>
  async (dispatch: ThunkDispatch<IMovieState, void, IMovieAction>) => {
    try {
      dispatch({
        type: FETCH_MOVIE_DETAILS,
      });
      const res = await axiosInstance.get("/", {
        params: {
          i: id,
          plot: "full",
        },
      });
      if (res.data.Error) {
        throw Error;
      }
      dispatch({
        type: FETCH_MOVIE_DETAILS_FINISHED,
        payload: {
          data: res.data,
        },
      });
    } catch (e) {
      dispatch({
        type: FETCH_MOVIE_DETAILS_ERROR,
        payload: console.log(e),
      });
    }
  };
