import { fetchTopRatedMovie, bashUrl } from "./api";

const topRatedMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const topRatedMovie = await bashUrl.get(fetchTopRatedMovie);

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
