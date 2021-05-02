import { fetchPopularMovie, fetchPopularTv } from "./api";

import axios from "axios";

const popularMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const popularMovie = await axios.get(fetchPopularMovie);
    const popularTv = await axios.get(fetchPopularTv);

    dispatch({
      type: "POPULAR_MOVIE",
      payload: {
        popularMovie,
        popularTv,
      },
    });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: err,
    });
  }
};

export default popularMovieAction;
