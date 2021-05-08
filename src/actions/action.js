import { bashUrl } from "./api";

const action = async (dispatch, fechData, type, check, ...arr) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    let fetchedData;

    if (check === "prop") {
      fetchedData = await bashUrl.get(fechData);
    } else {
      fetchedData = await bashUrl.get(fechData(...arr));
    }

    dispatch({
      type,
      payload: {
        fetchedData,
      },
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
    });
  }
};

export default action;
