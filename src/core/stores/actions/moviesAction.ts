import axiosInstance from "core/api/config";
import { ThunkDispatch } from "redux-thunk";
import { IMoviesAction, IMoviesState } from "../reducers/moviesReducer";
import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_FINISHED,
} from "../types";

export const getMovies =
  (keyword: string) =>
  async (dispatch: ThunkDispatch<IMoviesState, void, IMoviesAction>) => {
    try {
      dispatch({
        type: FETCH_MOVIES,
      });
      const res = await axiosInstance.get("/", {
        params: {
          s: keyword,
        },
      });
      if (res.data.Error) {
        throw Error;
      }
      dispatch({
        type: FETCH_MOVIES_FINISHED,
        payload: {
          data: res.data.Search,
          total: res.data.total,
        },
      });
    } catch (e) {
      dispatch({
        type: FETCH_MOVIES_ERROR,
        payload: console.log(e),
      });
    }
  };
