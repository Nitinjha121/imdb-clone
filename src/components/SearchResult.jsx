import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef, useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import searchAction from "../actions/searchAction";
import Poster from "./Poster";

function SearchResult() {
  const {
    searchData: { getSearchData, isLoading, pageCount },
  } = useSelector((state) => state);

  const hasFetchedData = useRef(false);

  const dispatch = useDispatch();

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

  return (
    <Poster
      isLoading={isLoading}
      data={getSearchData}
      pageNum={pageNum}
      prev={prevHandler}
      next={nextHandler}
      pageCount={pageCount}
    />
  );
}
export default SearchResult;
