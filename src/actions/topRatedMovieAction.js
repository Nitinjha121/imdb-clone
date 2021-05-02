import { fetchTopRatedMovie } from "./api";

import axios from "axios";

const topRatedMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const topRatedMovie = await axios.get(fetchTopRatedMovie);

    dispatch({
      type: "TOP_RATED_MOVIE",
      payload: {
        topRatedMovie,
      },
    });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: err,
    });
  }
};

export default topRatedMovieAction;
