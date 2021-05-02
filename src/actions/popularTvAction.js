import { fetchPopularTv } from "./api";

import axios from "axios";

const popularMovieAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const popularTv = await axios.get(fetchPopularTv);

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
