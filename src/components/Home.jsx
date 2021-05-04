import { useEffect } from "react";
import popularMovieAction from "../actions/popularMovieAction";
import trendingMovieAction from "../actions/trendingMovieAction";
import topRatedMovieAction from "../actions/topRatedMovieAction";
import popularTvAction from "../actions/popularTvAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BackgroundImg from "./BackgroundImg";
import Error from "./Error";
import jsxhandler from "./helper/jsxhandler";

function Home() {
  const dispatch = useDispatch();

  const {
    topRatedMovieO,
    popularTvO,
    trendingMovieO,
    popularMovieO,
  } = useSelector((state) => state);

  const isLoading1 = topRatedMovieO.isLoading;
  const isLoading2 = trendingMovieO.isLoading;
  const isLoading3 = popularTvO.isLoading;
  const isLoading4 = popularMovieO.isLoading;

  useEffect(() => {
    dispatch(popularMovieAction());
    dispatch(trendingMovieAction());
    dispatch(topRatedMovieAction());
    dispatch(popularTvAction());
  }, [dispatch]);

  const homeRenderHelperFun = function (isLoading, section, File, Error) {
    return isLoading ? (
      <div className="nfLoader"></div>
    ) : section.error ? (
      <Error error={section.error} />
    ) : (
      <File />
    );
  };

  return (
    <HomeStyle>
      <DivStyle>
        {homeRenderHelperFun(isLoading2, trendingMovieO, BackgroundImg, Error)}
      </DivStyle>

      {jsxhandler(
        isLoading1,
        topRatedMovieO.topRatedMovie,
        "Top Rated Movies",
        "movie",
        "top_rated"
      )}
      {jsxhandler(
        isLoading3,
        popularTvO.popularTv,
        "Popular Tv Shows",
        "tv",
        "popular"
      )}
      {jsxhandler(
        isLoading4,
        popularMovieO.popularMovie,
        "Popular Movie",
        "movie",
        "popular"
      )}
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DivStyle = styled.div`
  position: relative;
`;
