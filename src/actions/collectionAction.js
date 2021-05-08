import { fetchCollection } from "./api";
import action from "./action";

const collectionAction = (media, type, page) => async (dispatch) =>
  action(
    dispatch,
    fetchCollection,
    "COLLECTION_MEDIA",
    "func",
    media,
    type,
    page
  );

export default collectionAction;
