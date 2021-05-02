const intialState = {
  topRatedMovie: [],
  error: "",
  isLoading: true,
};

const topRatedMovieReducer = (state = intialState, action) => {
  switch (action.type) {
    case "TOP_RATED_MOVIE":
      return {
        ...state,
        topRatedMovie: action.payload.topRatedMovie.data.results,
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

export default topRatedMovieReducer;
