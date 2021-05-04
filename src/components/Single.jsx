import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import movieById from "../actions/idAction";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  timeHandler,
  moneyHandler,
  checkLocalStorage,
  deleteLocalStorage,
  ratingHandler,
  formHandler,
} from "./helper/function";

const Single = React.memo(() => {
  const { byId, isLoading } = useSelector((state) => state.movieId);
  const dispatch = useDispatch();

  const img = "https://image.tmdb.org/t/p/";

  const { pathname } = useLocation();

  const [fav, setFav] = useState(false);

  const arr = pathname.split("/");

  const fetchData = useRef(false);

  useEffect(() => {
    if (!fetchData.current) {
      const path = window.location.pathname.split("/");
      dispatch(movieById(path[1], path[3]));
      fetchData.current = true;
    }
  }, [dispatch]);

  const verticalLine = <span style={{ margin: "0px 10px" }}>|</span>;
  const spanStyle = { marginLeft: "5px", color: "white" };
  const title = byId.title || byId.original_name || byId.name;
  const loader = <div className="nfLoader"></div>;

  const favouriteHandler = function () {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === byId.id) return;
    }

    localStorage.setItem(byId.id, JSON.stringify(byId));
  };

  return isLoading ? (
    loader
  ) : (
    <div>
      <HeaderStyle>
        <h1>
          {title}

          <span style={{ color: "#C0C0C0", fontSize: 14 }}>
            {arr[1].toUpperCase()} {verticalLine}
            {timeHandler(byId.episode_run_time && byId.episode_run_time[0]) ||
              timeHandler(byId.runtime)}{" "}
            {verticalLine}
            {byId.genres &&
              byId.genres.map(({ name }, i) => (
                <span key={i} style={{ marginRight: "4px" }}>
                  {name}
                  {i === byId.genres.length - 1 ? null : byId.length > 1 && ","}
                </span>
              ))}
            {verticalLine}
            {arr[1] === "movie" && arr[1].toUpperCase()}
            {arr[1] === "tv" &&
              `${arr[1].toUpperCase()}
               ${byId.type}
 (${byId?.last_air_date?.slice(0, 4)})`}
          </span>
        </h1>
        <p>
          <Star
            src="https://img.icons8.com/fluent/48/000000/star.png"
            alt="star"
          />
          <span style={{ fontSize: 30 }}>{byId.vote_average}</span>
          <span style={{ color: "#ccc", alignSelf: "flex-end" }}>/10</span>
        </p>
      </HeaderStyle>
      <hr />
      <BodyStyle>
        <div className="img__container">
          {<img src={img + "w1280" + byId.backdrop_path} alt={title} />}
        </div>
        <div className="info__container">
          <div className="left__side">
            {<img src={img + "w780" + byId.poster_path} alt={title} />}
            {checkLocalStorage.call(this, byId.id) && (
              <FormStyle onSubmit={formHandler}>
                <h3>Add Comments</h3>
                <label>Rating</label>

                <div className="star__rating" name="rating">
                  <span className="fa fa-star checked"></span>
                  <span
                    onClick={ratingHandler}
                    className="fa fa-star checked"
                  ></span>
                  <span
                    onClick={ratingHandler}
                    className="fa fa-star checked"
                  ></span>
                  <span onClick={ratingHandler} className="fa fa-star"></span>
                  <span onClick={ratingHandler} className="fa fa-star"></span>
                </div>
                <label>Comment</label>
                <input name="comment" />
                <button>Submit</button>
              </FormStyle>
            )}
          </div>

          <div className="right__side" style={{ color: "#C0C0C0" }}>
            <p>
              Name: <span style={spanStyle}>{title}</span>
            </p>
            {byId.tagline && (
              <p>
                Tagline: <span style={spanStyle}>{byId.tagline}</span>
              </p>
            )}
            {byId.release_date && (
              <p>
                Released Date:{" "}
                <span style={spanStyle}>{byId.release_date}</span>
              </p>
            )}
            <p>
              Genre:
              {byId.genres.map(({ name }, i) => (
                <span style={spanStyle} key={i}>
                  {name}
                  {i === byId.genres.length - 1
                    ? null
                    : byId.genres.length > 1 && ","}
                </span>
              ))}
            </p>
            <p>
              Overview: <span style={spanStyle}>{byId.overview}</span>
            </p>
            <p>
              Production Companie
              {byId?.production_companies?.length > 1 && "s"}:
              {byId.production_companies?.map(({ name }, i) => (
                <span key={name} style={spanStyle}>
                  {name}
                  {i === byId.production_companies.length - 1
                    ? null
                    : byId.production_companies.length > 1 && ", "}
                </span>
              ))}
            </p>
            <p>
              Status:<span style={spanStyle}>{byId.status}</span>
            </p>

            {String(byId.budget) && byId.budget > 0 && (
              <p>Budget: {moneyHandler(byId.budget)}</p>
            )}

            {String(byId.revenue) && byId.revenue > 0 && (
              <p>Revenue: {moneyHandler(byId.revenue)}</p>
            )}

            {byId.seasons && (
              <p>
                Seasons:
                <span style={spanStyle}>
                  {byId?.seasons?.map((value, i) => {
                    if (i === byId.seasons.length - 1)
                      return value.season_number;
                    return "";
                  })}
                </span>
              </p>
            )}

            {byId.networks && (
              <p>
                Watch On:
                <span style={spanStyle}>
                  {byId.networks?.map(({ name, logo_path }, i) => (
                    <span style={spanStyle} key={i}>
                      <img
                        src={img + "w780" + logo_path}
                        alt={name}
                        style={{ width: 50, background: "#fff" }}
                      />
                      <span style={spanStyle}>{name}</span>
                      {i === byId.networks.length - 1
                        ? null
                        : byId.networks.length > 1 && ", "}
                    </span>
                  ))}
                </span>
              </p>
            )}
            {!fav && !checkLocalStorage.call(this, byId.id) && (
              <button
                className="btn"
                onClick={() => {
                  favouriteHandler();
                  setFav(!fav);
                }}
              >
                Add To Favourite
              </button>
            )}

            {(fav || checkLocalStorage.call(this, byId.id)) && (
              <button
                className="btn"
                onClick={() => {
                  deleteLocalStorage(byId.id);
                  setFav(!fav);
                }}
              >
                Delete From Favourite
              </button>
            )}
          </div>
        </div>
      </BodyStyle>
    </div>
  );
});

export default Single;

const FormStyle = styled.form`
  padding: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .star__rating {
    display: flex;
    span {
      cursor: pointer;
    }
    .checked {
      color: orange;
    }
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 20px;
    outline: none;
    margin: 20px 0;
  }
`;

const HeaderStyle = styled.div`
  padding: 5px;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-weight: 400;
    display: flex;
    flex-direction: column;
    span {
      margin-top: 7px;
    }
  }

  p:nth-child(2) {
    display: flex;
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

const BodyStyle = styled.section`
  p {
    position: relative;
  }

  .left__side {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      object-fit: contain;
    }
  }

  .btn {
    width: 170px;
    align-self: center;
  }
  .img__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    img:nth-child(1) {
      width: 100%;

      @media (max-width: 500px) {
        display: none;
      }
    }
  }

  .info__container {
    padding-top: 40px;
    display: flex;
    padding-bottom: 50px;
    img {
      align-self: flex-start;
      width: 180px;
      height: 100%;
    }
    @media (max-width: 500px) {
      margin: 0px;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      img {
        align-self: center;
      }
    }
  }

  .right__side {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    p {
      margin-bottom: 10px;
    }
  }
`;

const Star = styled.img`
  width: 30px;
  margin: 0;
  margin: 2px 5px 0px 15px;

  @media (max-width: 500px) {
    margin-left: 4px;
  }
`;
