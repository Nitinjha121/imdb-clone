import { searchData, bashUrl } from "./api";

const searchAction = (search, filter, page) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const getSearch = await bashUrl.get(searchData(search, filter, page));

    dispatch({
      type: "GET_SEARCH",
      payload: { getSearch },
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: { error },
    });
  }
};

export default searchAction;
