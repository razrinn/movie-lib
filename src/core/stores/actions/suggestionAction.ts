import axiosInstance from "core/api/config";
import { ThunkDispatch } from "redux-thunk";
import { IMoviesAction, IMoviesState } from "../reducers/moviesReducer";
import {
  FETCH_SUGGESTION,
  FETCH_SUGGESTION_ERROR,
  FETCH_SUGGESTION_FINISHED,
} from "../types";

export const getSuggestions =
  (keyword: string) =>
  async (dispatch: ThunkDispatch<IMoviesState, void, IMoviesAction>) => {
    try {
      dispatch({
        type: FETCH_SUGGESTION,
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
        type: FETCH_SUGGESTION_FINISHED,
        payload: {
          data: res.data.Search,
          total: res.data.total,
        },
      });
    } catch (e) {
      dispatch({
        type: FETCH_SUGGESTION_ERROR,
        payload: console.log(e),
      });
    }
  };
