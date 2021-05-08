import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}

:root {
    --primary-bg:#000000;
    --width:max(12vw,200px);
    --min-width:40px;
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
    -webkit-tap-highlight-color: transparent;
}



.hideImg {
  transform: translateX(-100%);
}

.container-title {
  margin: 20px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.container-title:hover .right__key__icon {
  color: red;
}

.container-title::before {
  content: "";
  display: block;
  height: 30px;
  width: 4px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: red;
}



.img{
  overflow: hidden;
  width:100%;
  height:270px;
  img{

    transition: all 1s;
  }
  img:hover{
    transition: all 1s;
transform:scale(1.1);

  }
}

button {
    padding:10px;
    width:100px;
    cursor: pointer;
    outline:none;
    border-radius:10px;
    border:none;
    color:#ffffff;
    background-color:red;
}

button:hover{
  
  box-shadow: 0px 0px 20px 2px black,
              0px 0px 20px 5px red ;
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
  width:calc(100% - var(--width));
  
  @media (max-width:900px) {
    width:calc(100% - var(--min-width));
  }
}

`;

export default GlobalStyle;

export const Star = styled.img`
  width: 17px !important;
  margin: 0 !important;
  margin-right: 5px !important;
`;
