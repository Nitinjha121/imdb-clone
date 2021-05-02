const intialState = {
  popularTv: [],
  error: "",
  isLoading: true,
};

const popularTvReducer = (state = intialState, action) => {
  switch (action.type) {
    case "POPULAR_TV":
      return {
        ...state,
        popularTv: action.payload.popularTv.data.results,
        isLoading: false,
      };
    case "ERROR":
      return { ...state, error: action.payload };
    case "LOADING_DETAIL":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default popularTvReducer;
