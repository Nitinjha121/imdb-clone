import { fetchById, bashUrl } from "./api";

const movieById = (media, id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const byId = await bashUrl.get(fetchById(media, id));

  dispatch({
    type: "BY_ID",
    payload: {
      byId,
    },
  });
};

export default movieById;
