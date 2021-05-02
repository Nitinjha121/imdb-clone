import { searchData } from "./api";
import axios from "axios";

const searchAction = (search, page) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const getSearch = await axios.get(searchData(search, page));

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
