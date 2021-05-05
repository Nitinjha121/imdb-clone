import { fetchPopularMovie, bashUrl } from "./api";

const popularMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const popularMovie = await bashUrl.get(fetchPopularMovie);

    dispatch({
      type: "POPULAR_MOVIE",
      payload: {
        popularMovie,
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
