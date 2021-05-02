import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Menu({ menuName, arr }) {
  return (
    <SmallStyle>
      <h4>{menuName}</h4>
      <ListStyle>
        {arr.map(({ icon, name, callBack, link }) => (
          <li onClick={callBack || null} key={name}>
            <Link to={link || "/"}>
              <Icons>{icon}</Icons> <span>{name}</span>
            </Link>
          </li>
        ))}
      </ListStyle>
    </SmallStyle>
  );
}

export default Menu;

const SmallStyle = styled.div`
  padding: 10px;
  margin: 20px 0;
`;

const ListStyle = styled.ul`
  list-style-type: none;
  cursor: pointer;
  margin: 20px 0;
  li {
    margin: 5px 0;
    a {
      display: flex;
      align-items: center;
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const Icons = styled.span`
  margin-right: 5px;
`;
