import { fetchTrendingMovie } from "./api";
import axios from "axios";

const trendingMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });
    const trendingMovie = await axios.get(fetchTrendingMovie);

    dispatch({
      type: "TRENDING_MOVIE",
      payload: {
        trendingMovie,
      },
    });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: err,
    });
  }
};

export default trendingMovieAction;
