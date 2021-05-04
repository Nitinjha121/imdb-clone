import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import collectionAction from "../actions/collectionAction";
import Poster from "./Poster";

function Collection() {
  const {
    collection: { collectionMedia, isLoading, pageCount },
  } = useSelector((state) => state);

  const hasFetchedData = useRef(false);

  const dispatch = useDispatch();

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

  return (
    <Poster
      isLoading={isLoading}
      data={collectionMedia}
      pageNum={pageNum}
      prev={prevHandler}
      next={nextHandler}
      pageCount={pageCount}
    />
  );
}

export default Collection;
