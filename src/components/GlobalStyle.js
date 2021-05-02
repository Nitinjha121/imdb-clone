import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}

:root {
    --primary-bg:#000000;
}

body {
    height:100%;
    background-color:var(--primary-bg);
    color:#ffffff;
    font-family:"Poppins",sans-serif;
}

.App{
    height:100%;
    width:100%;
    /* overflow-x: hidden; */
}

button {
    padding:10px;
    width:100px;
    cursor: pointer;
    outline:none;
    border-radius:10px;
    border:none;
    box-shadow: 0 4px 25px rgb(14 36 49 / 15%);
    background-color:red;
    color:#ffffff;
}



/* loader   */

.nfLoader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 37px 0 0 -25px;
  width: 50px;
  height: 50px;
}
.nfLoader:after {
  content: "";
  background-image: url("https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png");
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  position: absolute;
  margin: -6px;
  width: inherit;
  height: inherit;
  animation: nfLoader-spin 1.1s linear infinite,1!important;
  -webkit-animation: nfLoader-spin 1.1s linear infinite,1!important; 
}
@keyframes nfLoader-spin {
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes nfLoader-spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.right-side{
  width: min(94%, 900px);
}

@media (min-width: 900px){
  .right-side{
    width: 100%;
  }
}

`;

export default GlobalStyle;

export const Star = styled.img`
  width: 17px !important;
  margin: 0 !important;
  margin-right: 5px !important;
`;
