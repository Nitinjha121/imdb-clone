const intialState = {
  trendingMovie: [],
  error: "",
  isLoading: true,
};

const trendingMovieReducer = (state = intialState, action) => {
  switch (action.type) {
    case "TRENDING_MOVIE":
      return {
        ...state,
        trendingMovie: action.payload.trendingMovie.data.results,
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

export default trendingMovieReducer;
