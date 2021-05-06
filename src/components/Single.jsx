import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import movieById from "../actions/idAction";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { timeHandler } from "./helper/function";
import InfoBody from "./InfoBody";

const Single = React.memo(() => {
  const { byId, isLoading } = useSelector((state) => state.movieId);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

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
  const title = byId.title || byId.original_name || byId.name;
  const loader = <div className="nfLoader"></div>;

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
      <InfoBody byId={byId} title={title} />
    </div>
  );
});

export default Single;

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

const Star = styled.img`
  width: 30px;
  margin: 0;
  margin: 2px 5px 0px 15px;
  object-fit: contain;

  @media (max-width: 500px) {
    margin-left: 4px;
  }
`;
