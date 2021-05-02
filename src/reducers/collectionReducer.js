const intialState = {
  collectionMedia: [],
  pageCount: {},
  isLoading: true,
  error: "",
};

const collectionReducer = function (state = intialState, action) {
  switch (action.type) {
    case "COLLECTION_MEDIA":
      return {
        ...state,
        collectionMedia: action.payload.fetchCollectionMedia.data.results,
        pageCount: action.payload.fetchCollectionMedia.data,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default collectionReducer;
