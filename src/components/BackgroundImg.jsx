import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BackgroundImg() {
  const img = "https://image.tmdb.org/t/p/w1280";

  const { trendingMovieO, genreListO } = useSelector((state) => state);

  const { trendingMovie } = trendingMovieO;
  const { genreList } = genreListO;

  const compresseWord = function (strings) {
    return strings.slice(0, 120) + "...";
  };

  const images = trendingMovie?.flatMap((data, i) => (
    <Link to={`/${data.media_type}/list/${data.id}`} key={i}>
      <Background>
        <img src={img + data.backdrop_path} alt={data.original_title} />

        <TrendInfo>
          <h2>{data.original_title || data.name || data.title}</h2>
          <p>
            <span style={{ marginRight: "10px" }}>
              {data.media_type[0].toUpperCase() + data.media_type.slice(1)}
            </span>

            <span style={{ marginRight: "10px" }}>
              {data.genre_ids.map((genre) => (
                <span style={{ margin: "0px 2px" }} key={genre}>
                  {genreList.find((gen) => gen.id === genre)?.name}
                </span>
              ))}
            </span>
            <span>{data.vote_average}/10</span>
          </p>
          <p>{compresseWord(data.overview)}</p>
          <button>Read More</button>
        </TrendInfo>
      </Background>
    </Link>
  ));

  return (
    <Container>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {images}
      </Carousel>
    </Container>
  );
}

export default BackgroundImg;

const Container = styled.div`
  position: relative;

  a {
    color: #ffffff;
  }

  @media (max-width: 500px) {
    .control-dots {
      display: none;
    }
  }
`;

const TrendInfo = styled.div`
  position: absolute;
  cursor: default;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 40px;
  line-height: 1.5;
  width: 400px;

  p {
    font-size: 12px;
  }

  p:nth-child(2) {
    font-size: 14px;
  }
  p:nth-child(3) {
    opacity: 0.7;
  }

  @media (max-width: 500px) {
    bottom: 0px;
    width: 100%;
    p,
    button {
      display: none;
    }
  }
`;

const Background = styled.div`
  width: 100%;
  position: relative;
  img {
    cursor: pointer;
    object-fit: cover;
    @media (max-width: 500px) {
      height: 60vh;
    }
  }
  transition: all 1s;
`;
