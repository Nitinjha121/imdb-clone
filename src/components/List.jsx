import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import collectionAction from "../actions/collectionAction";
import { useDispatch } from "react-redux";
import { checkLocalStorage, nameHandler } from "./helper/function";
import { Star } from "./GlobalStyle";

function List({ datas, name, media_type, type }) {
  const img = "https://image.tmdb.org/t/p/w185";

  const dispatch = useDispatch();

  const clickHandler = function (media, type) {
    dispatch(collectionAction(media, type));
  };

  return (
    <div>
      <Link
        to={`${media_type}/${type}?page=${1}`}
        style={{
          display: "inline-block",
          color: "white",
          textDecoration: "none",
        }}
      >
        <h2
          className="container-title"
          onClick={clickHandler.bind(this, media_type, type)}
        >
          {name}
          <KeyboardArrowRightIcon
            style={{ fontSize: 45 }}
            className="right__key__icon"
          />
        </h2>
      </Link>
      <PosterContainer>
        {datas.map((data, i) => (
          <Poster key={i}>
            <div className="img">
              <Link to={`/${media_type}/list/${data.id}`}>
                <img src={img + data.poster_path} alt={data.title} />
              </Link>
            </div>
            {checkLocalStorage.call(this, data.id) ? (
              <FavoriteIcon className="favourite" style={{ color: "red" }} />
            ) : (
              <FavoriteIcon className="favourite" />
            )}

            <p>
              <Star
                src="https://img.icons8.com/fluent/48/000000/star.png"
                alt="star"
              />
              <span>{data.vote_average}/10</span>
            </p>
            <Link to={`/${media_type}/list/${data.id}`}>
              <h3>
                {nameHandler(data.title || data.name || data.original_name)}
              </h3>
            </Link>
          </Poster>
        ))}
      </PosterContainer>
    </div>
  );
}

export default List;

export const H1Style = styled.h1``;

const PosterContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  background-color: var(--primary-bg);
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.div`
  background-color: black;
  margin: 20px;
  box-shadow: 0 4px 10px red, 0 -4px 10px red;
  border-radius: 10px;
  position: relative;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .img {
    margin-bottom: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  img {
    width: 170px;
    cursor: pointer;
  }

  p:nth-child(3) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .favourite {
    position: absolute;
    left: 0;
    top: 4px;
    cursor: pointer;
  }
  .favourite:hover {
    color: red;
  }
`;
