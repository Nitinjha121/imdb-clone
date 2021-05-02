import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory, useLocation } from "react-router-dom";
import searchAction from "../actions/searchAction";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState("");

  const location = useLocation();

  window.onload = function () {
    if (location.search.includes("?query")) {
      const path = new URLSearchParams(location.search);
      loadHandler(path.get("query"));
    }
  };

  function loadHandler(search) {
    dispatch(searchAction(search));
  }

  const formHandler = (e) => {
    e.preventDefault();
    history.push(`/search?query=${search}&page=1`);

    dispatch(searchAction(search));
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <NavStyle>
      <Link to="/">
        <h1>IMDB</h1>
      </Link>
      <Search>
        <select className="filter">
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="tv">Tv Shows</option>
          <option value="action">Action</option>
          <option value="scifi">Sci-fi</option>
        </select>
        <form onSubmit={formHandler}>
          <input
            onChange={changeHandler}
            placeholder="Search movies, tv shows..."
          />
        </form>
        <SearchIcon className="search-icon" />
      </Search>
      <Link to="/favourite">
        <div className="nav__favourite">Favourite</div>
      </Link>
    </NavStyle>
  );
}

export default Nav;

const Search = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 500px) {
    position: absolute;
    left: 0;

    .filter {
      display: none;
    }
  }
`;

const NavStyle = styled.div`
  display: flex;
  padding: 10px;
  align-self: flex-start;
  align-items: center;
  justify-content: space-around;
  z-index: 3;
  position: sticky;

  top: 0;
  background-color: var(--primary-bg);

  @media (max-width: 380px) {
    .nav__favourite {
      display: none;
    }

    height: 50px;
  }

  a {
    text-decoration: none;
    color: white;
  }
  input {
    width: min(400px, 50vw);
    border: none;
    padding: 10px;
    padding-left: 50px;
    border-radius: 20px;
    outline: none;
  }
  .search-icon {
    position: relative;
    left: -30px;
    top: 6px;
    color: #949494;

    @media (max-width: 500px) {
      display: none;
    }
  }
  select {
    display: inline;
    padding: 10px;
    padding-top: 9.5px;
    border-radius: 20px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: none;
    position: relative;
    outline: none;
    left: 40px;
    border: none;
    cursor: pointer;
    @media (max-width: 600px) {
      width: 70px;

      -webkit-appearance: none;
      appearance: none;
    }
  }
  h1 {
    @media (max-width: 660px) {
      display: none;
    }
    @media (min-width: 900px) {
      display: none;
    }
  }
  @media (max-width: 660px) {
    justify-content: space-between;

    input {
      width: 120%;
    }

    .search-icon {
      left: 5px;
    }
  }

  @media (max-width: 500px) {
    padding: 20px;
  }
`;
