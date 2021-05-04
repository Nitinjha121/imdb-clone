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

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BarStyle>
        <SideBar />
        <div className="right-side">
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
}

export default App;

const BarStyle = styled.div`
  display: flex;
  width: 100%;
`;
