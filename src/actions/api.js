import axios from "axios";

const access_token = process.env.REACT_APP_ACCESS_TOKEN;

export const bashUrl = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});

export const fetchPopularMovie = "movie/popular";

export const fetchTrendingMovie = "trending/all/week";

export const fetchTopRatedMovie = "movie/top_rated";

export const fetchGenreList = "genre/movie/list";

export const fetchPopularTv = "tv/popular";

export const fetchById = function (media, id) {
  return `${media}/${id}`;
};

export const searchData = function (search, filter = "multi", page = 1) {
  return `search/${filter}?&query=${search}&include_adult=false&page=${page}`;
};

export const fetchCollection = function (media, type, page = "1") {
  return `${media}/${type}?&page=${page}`;
};
