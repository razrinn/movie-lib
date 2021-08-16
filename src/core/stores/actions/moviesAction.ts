import axiosInstance from "core/api/config";
import { ThunkDispatch } from "redux-thunk";
import { IMoviesAction, IMoviesState } from "../reducers/moviesReducer";
import {
  FETCH_MORE_MOVIES,
  FETCH_MORE_MOVIES_ERROR,
  FETCH_MORE_MOVIES_FINISHED,
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
          page: 1,
        },
      });
      if (res.data.Error) {
        throw Error;
      }
      dispatch({
        type: FETCH_MOVIES_FINISHED,
        payload: {
          data: res.data.Search,
          total: parseInt(res.data.totalResults as string),
        },
      });
    } catch (e) {
      dispatch({
        type: FETCH_MOVIES_ERROR,
        payload: console.log(e),
      });
    }
  };

export const fetchMoreMovies =
  (keyword: string, page: number) =>
  async (dispatch: ThunkDispatch<IMoviesState, void, IMoviesAction>) => {
    try {
      dispatch({
        type: FETCH_MORE_MOVIES,
      });
      const res = await axiosInstance.get("/", {
        params: {
          s: keyword,
          page: page,
        },
      });
      if (res.data.Error) {
        throw Error;
      }
      dispatch({
        type: FETCH_MORE_MOVIES_FINISHED,
        payload: {
          data: res.data.Search,
          total: parseInt(res.data.totalResults as string),
        },
      });
    } catch (e) {
      dispatch({
        type: FETCH_MORE_MOVIES_ERROR,
        payload: console.log(e),
      });
    }
  };
