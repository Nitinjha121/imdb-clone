import { useEffect } from "react";
import popularMovieAction from "../actions/popularMovieAction";
import trendingMovieAction from "../actions/trendingMovieAction";
import topRatedMovieAction from "../actions/topRatedMovieAction";
import popularTvAction from "../actions/popularTvAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BackgroundImg from "./BackgroundImg";
import List from "./List";
import Error from "./Error";

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
      <DivStyle>
        {isLoading1 ? (
          <div className="nfLoader"></div>
        ) : (
          <List
            datas={topRatedMovieO.topRatedMovie}
            name="Top Rated Movies"
            media_type="movie"
            type="top_rated"
          />
        )}
      </DivStyle>
      <DivStyle>
        {isLoading3 ? (
          <div className="nfLoader"></div>
        ) : (
          <List
            datas={popularTvO.popularTv}
            name="Popular Tv Shows"
            media_type="tv"
            type="popular"
          />
        )}
      </DivStyle>
      <DivStyle>
        {isLoading4 ? (
          <div className="nfLoader"></div>
        ) : (
          <List
            datas={popularMovieO.popularMovie}
            name="Popular Movie"
            media_type="movie"
            type="popular"
          />
        )}
      </DivStyle>
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivStyle = styled.div`
  position: relative;
`;
