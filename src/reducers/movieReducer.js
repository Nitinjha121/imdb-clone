const intialState = {
  popularMovie: [],
  error: "",
  isLoading: true,
};

const movieReducer = (state = intialState, action) => {
  switch (action.type) {
    case "POPULAR_MOVIE":
      return {
        ...state,
        popularMovie: action.payload.popularMovie.data.results,
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

export default movieReducer;
