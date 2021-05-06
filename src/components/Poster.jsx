import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Star } from "./GlobalStyle";
import { nameHandler } from "./helper/function";

function Poster({ isLoading, data, pageNum, prev, next, pageCount }) {
  const img = "https://image.tmdb.org/t/p/";

  return isLoading ? (
    <div className="nfLoader"></div>
  ) : (
    <SearchResults>
      <SearchDataStyle>
        {data.map((searchData, i) => (
          <SingleData key={i}>
            <div className="img">
              <Link
                to={`/${searchData.first_air_date ? "tv" : "movie"}/list/${
                  searchData.id
                }`}
              >
                <img
                  src={
                    img +
                    ((searchData.profile_path &&
                      "w300" + searchData.profile_path) ||
                      (searchData.poster_path &&
                        "w185" + searchData.poster_path))
                  }
                  alt={
                    searchData.original_name ||
                    searchData.title ||
                    searchData.name
                  }
                />
              </Link>
            </div>
            {!searchData.profile_path && (
              <p>
                <Star
                  src="https://img.icons8.com/fluent/48/000000/star.png"
                  alt="star"
                />
                <span>{searchData.vote_average}/10</span>
              </p>
            )}
            <Link
              to={`/${searchData.first_air_date ? "tv" : "movie"}/list/${
                searchData.id
              }`}
            >
              <h3>
                {nameHandler(
                  searchData.original_name ||
                    searchData.title ||
                    searchData.name
                )}
              </h3>
            </Link>
          </SingleData>
        ))}
      </SearchDataStyle>
      <div className="pagination">
        {pageNum > 1 && <button onClick={prev}>&lt;</button>}
        {pageCount.total_pages > pageNum && (
          <button onClick={next}>&gt;</button>
        )}
      </div>
    </SearchResults>
  );
}

export default Poster;

const SearchDataStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
`;

const SearchResults = styled.div`
  .pagination {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    width: 100%;
  }
`;

const SingleData = styled.div`
  margin: 10px;
  background-color: #000;
  color: #fff;
  width: 170px;
  box-shadow: 0 4px 10px red, 0 -4px 10px red;
  border-radius: 10px;

  img {
    width: min(200px, 100%);
    cursor: pointer;
  }
  h3 {
    text-align: center;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }

  .img {
    margin-bottom: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
