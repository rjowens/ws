require('../styles/style.css.scss');

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';

import WineSearch from './routes/wine_search/wine_search';
import SearchResults from './routes/wine_search/search_results';
import Login from './routes/auth/login'
import Logout from './routes/auth/logout'

import auth from './service/auth_api'

import AutoCompleteStore from './stores/autocomplete';
import WineVintageStore from './stores/wine_vintage';
var Promise = require("bluebird");

const ac_store = new AutoCompleteStore();
const wine_vintage_store = new WineVintageStore();

function requireAuth(nextState, replace) {
  if (!auth.isLoggedIn()) {
    replace({
      pathname: '/login'
    })
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={WineSearch}
           history={hashHistory}
           acStore={ac_store}
           onSearch={ac_store.getWords}
           onAutoCompleteSelected={wine_vintage_store.getWineVintages}
           wineVintageStore={wine_vintage_store}
           onEnter={requireAuth}
           >
    </Route>
    <Route path="login" component={Login}>
    </Route>
    <Route path="logout" component={Logout}>
    </Route>
  </Router>,
  document.getElementById('root')
);

//if (module.hot) {
//  module.hot.accept('./App', () => {
//    const NextApp = require('./App').default;
//
//    render(
//      <AppContainer>
//        <NextApp appState={appState} />
//      </AppContainer>,
//      document.getElementById('root')
//    );
//  });
//}
