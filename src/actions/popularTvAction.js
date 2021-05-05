import { fetchPopularTv, bashUrl } from "./api";

const popularMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const popularTv = await bashUrl.get(fetchPopularTv);

    dispatch({
      type: "POPULAR_TV",
      payload: {
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
