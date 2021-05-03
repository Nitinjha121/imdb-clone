import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { Star } from "./GlobalStyle";

function Favourite() {
  const [arr, setArr] = useState([]);

  const deleteHandler = function (id) {
    localStorage.removeItem(id);
    setArr(renderFunction());
  };

  const img = "https://image.tmdb.org/t/p/w780";

  const renderFunction = () => {
    const container = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      container.push(JSON.parse(localStorage.getItem(key)));
    }
    return container;
  };

  useEffect(() => {
    const result = renderFunction();
    setArr(result);
  }, [setArr]);

  return (
    <SearchDataStyle>
      {!arr.length ? (
        <h2>Nothing is in you favourite</h2>
      ) : (
        arr.map((data, i) => (
          <SingleData key={i}>
            <div className="img">
              <Link
                to={`/${data.episode_run_time ? "tv" : "movie"}/list/${
                  data.id
                }`}
              >
                <img
                  src={img + data.poster_path}
                  alt={data.original_name || data.title || data.name}
                />
              </Link>
            </div>
            <p>
              <Star
                src="https://img.icons8.com/fluent/48/000000/star.png"
                alt="star"
              />
              <span>{data.vote_average}/10</span>
            </p>

            <Link
              to={`/${data.episode_run_time ? "tv" : "movie"}/list/${data.id}`}
            >
              <h3>{data.original_name || data.title || data.name}</h3>
            </Link>
            <DeleteIcon
              onClick={deleteHandler.bind(this, data.id)}
              className="delete_icon"
            />
          </SingleData>
        ))
      )}
    </SearchDataStyle>
  );
}

export default Favourite;

const SearchDataStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  grid-gap: 2rem;
`;

const SingleData = styled.div`
  background-color: #c0c0c0;
  width: 180px;
  justify-self: center;
  position: relative;

  .delete_icon {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .delete_icon:hover {
    color: red;
  }

  img {
    width: min(200px, 100%);
    cursor: pointer;
  }
  h3 {
    text-align: center;
    cursor: pointer;
    color: black;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
`;
