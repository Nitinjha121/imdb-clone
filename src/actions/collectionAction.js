import { fetchCollection } from "./api";
import axios from "axios";

const collectionAction = (media, type, page = "1") => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const fetchCollectionMedia = await axios.get(
      fetchCollection(media, type, page)
    );

    dispatch({
      type: "COLLECTION_MEDIA",
      payload: {
        fetchCollectionMedia,
      },
    });
  } catch (error) {
    dispatch({
      type: "ERROR",
    });
  }
};

export default collectionAction;
