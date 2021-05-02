const api_key = process.env.REACT_APP_API_KEY;

const bashUrl = function (option, query = "") {
  return `https://api.themoviedb.org/3/${option}?api_key=${api_key}${query}`;
};

export const fetchPopularMovie = bashUrl("movie/popular");

export const fetchTrendingMovie = bashUrl("trending/all/week");

export const fetchTopRatedMovie = bashUrl("movie/top_rated");

export const fetchGenreList = bashUrl("genre/movie/list");

export const fetchPopularTv = bashUrl("tv/popular");

export const fetchById = function (media, id) {
  return bashUrl(`${media}/${id}`);
};

export const searchData = function (search, page = "1") {
  return bashUrl(
    "search/multi",
    `&query=${search}&include_adult=false&page=${page}`
  );
};

export const fetchCollection = function (media, type, page = "1") {
  return bashUrl(`${media}/${type}`, `&page=${page}`);
};
