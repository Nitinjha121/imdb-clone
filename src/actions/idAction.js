import { fetchById } from "./api";
import axios from "axios";

const movieById = (media, id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const byId = await axios.get(fetchById(media, id));

  dispatch({
    type: "BY_ID",
    payload: {
      byId,
    },
  });
};

export default movieById;
