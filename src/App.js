import React from "react";
import { createBrowserHistory } from "history";
import { Route, Switch, Router } from "react-router";
import routes from "./constants/routes";
import ExpectationPage from "./pages/ExpectationPage/ExpectationPage";
import CatalogContainer from "./pages/CatalogPage/CatalogPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import MirrorPage from "./pages/MirrorPage/MirrorPage";
import HomePageContainer from "./pages/HomePage/HomePageContainer";
import "./index.css";
import checkInaction from "./helpers/check-in-action";
import api from "./api";
import * as signalR from '@microsoft/signalr';
import config from "./config";

const history = createBrowserHistory();

function App() {

  React.useEffect(() => {
    checkInaction(history);
    const userAgent = window.navigator.userAgent;

    api.user
      .login(userAgent)
      .then((userID) => localStorage.setItem("userId", userID));

  }, []);

  return (
    <Router history={history}>
      <Wrapper />
    </Router>
  );
}


const Wrapper = () => {

  return (
    <Switch>
      <Route path={routes.EXPECTATION} component={ExpectationPage} />
      <Route path={routes.CATALOG} component={CatalogContainer} />
      <Route path={routes.BASKET} component={BasketPage} />
      <Route path={routes.MIRROR} component={MirrorPage} />
      <Route path={routes.HOME}  component={HomePageContainer} />
    </Switch>
  );
}

export default App;
