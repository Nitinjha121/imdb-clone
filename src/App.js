import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Single from "./components/Single";
import SearchResult from "./components/SearchResult";
import Collection from "./components/Collection";
import Favourite from "./components/Favourite";
import NotFound from "./components/404";

const App = () => {
  let menu;
  const removeToggle = (setNavMenu) => (menu = setNavMenu);

  return (
    <div className="App">
      <GlobalStyle />
      <BarStyle>
        <SideBar removeToggle={removeToggle} />
        <div className="right-side" onClick={() => menu(false)}>
          <Nav />
          <div className="changeble">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/:media_type/list/:id">
                <Single />
              </Route>
              <Route
                path="/:media_type/:type"
                component={(props) => (
                  <Collection {...props} key={window.location.pathname} />
                )}
              />

              <Route
                path="/search"
                component={(props) => (
                  <SearchResult {...props} key={window.location.pathname} />
                )}
              />
              <Route path="/favourite">
                <Favourite />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </BarStyle>
    </div>
  );
};

export default App;

const BarStyle = styled.div`
  display: flex;
  width: 100%;
`;
