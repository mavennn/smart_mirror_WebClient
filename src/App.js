import React from 'react';
import { createBrowserHistory } from 'history';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import routes from "./constants/routes";
import ExpectationPageContainer from "./pages/ExpectationPage/ExpectationPageContainer";
import CatalogContainer from "./pages/CatalogPage/CatalogPageContainer";
import BasketPageContainer from "./pages/BasketPage/BasketPageContainer";
import MirrorPageContainer from "./pages/MirrorPage/MirrorPageContainer";
import HomePageContainer from "./pages/HomePage/HomePageContainer";
import './index.css';
import checkInaction from "./helpers/check-in-action";

const history = createBrowserHistory();
const store = configureStore(history);

class App extends React.Component {


    componentDidMount() {
        checkInaction(history);
    }

    render() {
      return (
          <Provider store={store}>
             <ConnectedRouter history={history}>
                <Switch>
                   <Route path={routes.EXPECTATION} component={ExpectationPageContainer} />
                   <Route path={routes.CATALOG} component={CatalogContainer} />
                   <Route path={routes.BASKET} component={BasketPageContainer} />
                   <Route path={routes.MIRROR} component={MirrorPageContainer} />
                   <Route path={routes.HOME} component={HomePageContainer} />
                </Switch>
             </ConnectedRouter>
          </Provider>
      )
   }
}

export default App;

