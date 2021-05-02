const intialState = {
  getSearchData: [],
  pageCount: {},
  isLoading: true,
  error: "",
};

const searchReducer = function (state = intialState, action) {
  switch (action.type) {
    case "GET_SEARCH":
      return {
        ...state,
        getSearchData: action.payload.getSearch.data.results,
        pageCount: action.payload.getSearch.data,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default searchReducer;
