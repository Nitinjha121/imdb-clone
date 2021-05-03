import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import collectionAction from "../actions/collectionAction";
import { Star } from "./GlobalStyle";

function Collection() {
  const {
    collection: { collectionMedia, isLoading, pageCount },
  } = useSelector((state) => state);

  const hasFetchedData = useRef(false);

  const dispatch = useDispatch();

  const img = "https://image.tmdb.org/t/p/w780";

  const { pathname, search } = useLocation();
  const history = useHistory();
  const path = pathname.split("/");

  const pageNum = +search.slice(6);

  useEffect(() => {
    if (!hasFetchedData.current) {
      dispatch(collectionAction(path[1], path[2], pageNum));
      hasFetchedData.current = true;
    }
  }, [dispatch, path, pageNum, collectionMedia]);

  const nextHandler = function () {
    history.push(`/${path[1]}/${path[2]}?page=${pageNum + 1}`);
    dispatch(collectionAction(path[1], path[2], pageNum + 1));
  };

  const prevHandler = function () {
    history.push(`/${path[1]}/${path[2]}?page=${pageNum - 1}`);
    dispatch(collectionAction(path[1], path[2], pageNum - 1));
  };

  return isLoading ? (
    <div className="nfLoader"></div>
  ) : (
    <CollectionContainer>
      <SearchDataStyle>
        {collectionMedia.map((collection, i) => (
          <SingleData key={i}>
            <div className="img">
              <Link to={`/${path[1]}/list/${collection.id}`}>
                <img
                  src={img + collection.poster_path}
                  alt={
                    collection.original_name ||
                    collection.title ||
                    collection.name
                  }
                />
              </Link>
            </div>
            <p>
              <Star
                src="https://img.icons8.com/fluent/48/000000/star.png"
                alt="star"
              />
              <span>{collection.vote_average}/10</span>
            </p>

            <Link to={collection.media_type + "/list/" + collection.id}>
              <h3>
                {collection.original_name ||
                  collection.title ||
                  collection.name}
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
    </CollectionContainer>
  );
}

export default React.memo(Collection);

const CollectionContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    width: 100%;
  }
`;

const SearchDataStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  grid-gap: 2rem;

  /* grid-column-gap: 0.1rem; */
`;

const SingleData = styled.div`
  background-color: #c0c0c0;
  width: 180px;
  justify-self: center;
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
