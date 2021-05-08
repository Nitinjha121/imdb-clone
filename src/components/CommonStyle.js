import styled from "styled-components";

export const SearchDataStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  grid-gap: 2rem;
  padding: 30px;
`;

export const SingleData = styled.div`
  background-color: #000;
  color: #fff;
  width: 210px;
  justify-self: center;
  box-shadow: 0 4px 10px red, 0 -4px 10px red;
  position: relative;
  border-radius: 10px;
  margin: 10px;

  .delete_icon {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .delete_icon:hover {
    color: red;
  }

  .img {
    margin-bottom: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  img {
    width: min(210px, 100%);
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

  .favourite {
    position: absolute;
    left: 0;
    top: 4px;
    cursor: pointer;
  }
  .favourite:hover {
    color: red;
  }
`;
