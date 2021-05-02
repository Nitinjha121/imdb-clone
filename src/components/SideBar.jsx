import { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import PeopleIcon from "@material-ui/icons/People";
import { useDispatch } from "react-redux";
import popularMovieAction from "../actions/popularMovieAction";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

function SideBar() {
  const dispatch = useDispatch();

  const [navMenu, setNavMenu] = useState(false);

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
      link: "/favourite",
    },
    { name: "Tv Shows", icon: <TvIcon />, link: "/" },
    { name: "Celebs", icon: <PeopleIcon />, link: "/" },
    { name: "Favourite", icon: <FavoriteBorderIcon />, link: "/" },
  ];

  const clickHandler = () => {
    setNavMenu(!navMenu);
  };

  // console.log(select);

  const genre = [{ name: "Action", icon: "" }];

  return (
    <Container>
      <MenuIcon className="menuToggle" onClick={clickHandler} />
      <SideBarStyle className={navMenu ? "" : "short_hidden"}>
        <Link to="/">
          <h1>IMDB</h1>
        </Link>
        <Menu arr={menu} menuName="Menu" />
        <Menu arr={genre} menuName="Genre" />
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
  z-index: 5;
  min-height: 100vh;

  a {
    text-decoration: none;
    color: white;
  }
`;

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: max(200px, 12vw);
  padding: 10px;
  height: 100%;
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
