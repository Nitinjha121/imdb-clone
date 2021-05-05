import { fetchGenreList, bashUrl } from "./api";

const genreListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const genreList = await bashUrl.get(fetchGenreList);

    dispatch({
      type: "GENRE_LISt",
      payload: {
        genreList,
      },
    });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: err,
    });
  }
};

export default genreListAction;
