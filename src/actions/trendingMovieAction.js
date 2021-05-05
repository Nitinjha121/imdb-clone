import { fetchTrendingMovie, bashUrl } from "./api";

const trendingMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });
    const trendingMovie = await bashUrl.get(fetchTrendingMovie);

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
