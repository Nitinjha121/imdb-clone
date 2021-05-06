import React, { useState } from "react";
import styled from "styled-components";
import {
  moneyHandler,
  checkLocalStorage,
  deleteLocalStorage,
  ratingHandler,
  formHandler,
  favouriteHandler,
} from "./helper/function";

function InfoBody({ byId, title }) {
  const spanStyle = { marginLeft: "5px", color: "white" };

  const [fav, setFav] = useState(false);

  const img = "https://image.tmdb.org/t/p/";

  return (
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
              Released Date: <span style={spanStyle}>{byId.release_date}</span>
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
                  if (i === byId.seasons.length - 1) return value.season_number;
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
                favouriteHandler(byId);
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
  );
}

export default InfoBody;

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
