import styled from "styled-components";
import Menu from "./Menu";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";

import { useState } from "react";
import { useDispatch } from "react-redux";
import popularMovieAction from "../actions/popularMovieAction";
import popularTvAction from "../actions/popularTvAction";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

function SideBar({ removeToggle }) {
  const dispatch = useDispatch();
  const [navMenu, setNavMenu] = useState(false);

  removeToggle(setNavMenu);

  const menu = [
    {
      name: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      name: "Movies",
      icon: <MovieIcon />,
      callBack() {
        dispatch(popularMovieAction());
      },
      link: "/movie/popular?page=1",
    },
    {
      name: "Tv Shows",
      icon: <TvIcon />,
      link: "/tv/popular?page=1",
      callBack() {
        dispatch(popularTvAction());
      },
    },
    // { name: "Celebs", icon: <PeopleIcon />, link: "/" },
    { name: "Favourite", icon: <FavoriteBorderIcon />, link: "/favourite" },
  ];

  const clickHandler = () => {
    setNavMenu(!navMenu);
  };

  // const genre = [{ name: "Action", icon: "" }];

  return (
    <Container>
      <MenuIcon className="menuToggle" onClick={clickHandler} />
      <SideBarStyle className={navMenu ? "" : "short_hidden"}>
        <Link to="/">
          <h1>IMDB</h1>
        </Link>
        <Menu arr={menu} menuName="Menu" />
        {/* <Menu arr={genre} menuName="Genre" /> */}
      </SideBarStyle>
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--primary-bg);
  position: sticky;
  top: 0;
  z-index: 4;
  height: 140vh;

  .menuToggle {
    display: none !important;
  }

  @media (max-width: 900px) {
    width: var(--min-width);

    .menuToggle {
      display: inline !important;
      font-size: 30px;
      margin: 10px;
      z-index: 8;
      position: sticky;
      cursor: pointer;
      top: 10px;
    }

    .short_hidden {
      opacity: 0;
      width: 0%;
      transition: all 1s ease-in-out;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  width: var(--width);
  position: sticky;
  top: 0;

  @media (max-width: 900px) {
    position: fixed;
    background-color: var(--primary-bg);
    left: 0;
    right: 0;
    width: min(400px, 30vw);
    transition: all 1s;
    height: 100%;

    h1 {
      display: none;
    }
  }
  @media (max-width: 460px) {
    width: 50vw;
  }
`;
