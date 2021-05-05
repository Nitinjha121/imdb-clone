import { fetchCollection, bashUrl } from "./api";

const collectionAction = (media, type, page = "1") => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const fetchCollectionMedia = await bashUrl.get(
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
