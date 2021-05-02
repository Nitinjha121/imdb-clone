import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import idReducer from "./idReducer";
import genreListReducer from "./genreListReducer";
import trendingMovieReducer from "./trendingMovieReducer";
import topRatedMovieReducer from "./topRatedMovieReducer";
import popularTvReducer from "./popularTvReducer";
import searchReducer from "./searchReducer";
import collectionReducer from "./collectionReducer";

const rootReducer = combineReducers({
  popularMovieO: movieReducer,
  movieId: idReducer,
  trendingMovieO: trendingMovieReducer,
  genreListO: genreListReducer,
  topRatedMovieO: topRatedMovieReducer,
  popularTvO: popularTvReducer,
  searchData: searchReducer,
  collection: collectionReducer,
});

export default rootReducer;
