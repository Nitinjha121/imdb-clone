import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import searchAction from "../actions/searchAction";
import styled from "styled-components";
import { Star } from "./GlobalStyle";

function SearchResult() {
  const {
    searchData: { getSearchData, isLoading, pageCount },
  } = useSelector((state) => state);

  const hasFetchedData = useRef(false);

  const dispatch = useDispatch();

  const img = "https://image.tmdb.org/t/p/";

  const { search } = useLocation();
  const history = useHistory();
  const path = useMemo(() => new URLSearchParams(search), [search]);

  const pageNum = +path.get("page");

  console.log(getSearchData);

  useEffect(() => {
    if (!hasFetchedData.current) {
      dispatch(searchAction(path.get("query"), path.get("filter"), pageNum));
      hasFetchedData.current = true;
    }
  }, [dispatch, pageNum, path]);

  const nextHandler = function () {
    history.push(
      `/search/?query=${path.get("query")}&page=${
        pageNum + 1
      }&filter=${path.get("filter")}`
    );
    dispatch(searchAction(path.get("query"), path.get("filter"), pageNum + 1));
  };

  const prevHandler = function () {
    history.push(
      `/search/?query=${path.get("query")}&page=${
        pageNum - 1
      }&filter=${path.get("filter")}`
    );
    dispatch(searchAction(path.get("query"), path.get("filter"), pageNum - 1));
  };

  return isLoading ? (
    <div className="nfLoader"></div>
  ) : (
    <SearchResults>
      <SearchDataStyle>
        {getSearchData.map((searchData, i) => (
          <SingleData key={i}>
            {console.log(searchData)}
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
                        "w780" + searchData.poster_path))
                  }
                  alt={
                    searchData.original_name ||
                    searchData.title ||
                    searchData.name
                  }
                />
              </Link>
            </div>
            <p>
              <Star
                src="https://img.icons8.com/fluent/48/000000/star.png"
                alt="star"
              />
              <span>{searchData.vote_average}/10</span>
            </p>
            <Link
              to={`/${searchData.first_air_date ? "tv" : "movie"}/list/${
                searchData.id
              }`}
            >
              <h3>
                {searchData.original_name ||
                  searchData.title ||
                  searchData.name}
              </h3>
            </Link>
          </SingleData>
        ))}
      </SearchDataStyle>
      <div className="pagination">
        {pageNum > 1 && <button onClick={prevHandler}>&lt;</button>}
        {pageCount.total_pages > pageNum && (
          <button onClick={nextHandler}>&gt;</button>
        )}
      </div>
    </SearchResults>
  );
}

export default SearchResult;

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
  background-color: #c0c0c0;
  width: 170px;
  box-shadow: 0 4px 25px rgb(14 36 49 / 15%);

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
