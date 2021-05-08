import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { Star } from "./GlobalStyle";
import { SearchDataStyle, SingleData } from "./CommonStyle";
import { nameHandler } from "./helper/function";

function Favourite() {
  const [arr, setArr] = useState([]);

  const deleteHandler = function (id) {
    localStorage.removeItem(id);
    setArr(renderFunction());
  };

  const img = "https://image.tmdb.org/t/p/w300";

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
              <h3>
                {nameHandler(data.original_name || data.title || data.name)}
              </h3>
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
