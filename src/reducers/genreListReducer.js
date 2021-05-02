const intialState = {
  genreList: [],
  error: "",
  isLoading: true,
};

const genreListReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GENRE_LISt":
      return {
        ...state,
        genreList: action.payload.genreList.data.genres,
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

export default genreListReducer;
