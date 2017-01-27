require('../styles/style.css.scss');

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { Router, Route, hashHistory, Link } from 'react-router';

import WineSearch from './routes/wine_search/wine_search';
import WineLists from './routes/wine_lists/wine_lists';
import Login from './routes/auth/login';
import Logout from './routes/auth/logout';
import auth from './service/auth_api';

import AutoCompleteStore from './stores/autocomplete';
import WineVintageStore from './stores/wine_vintage';
import WineListStore from './stores/wine_list';
var Promise = require("bluebird");

const ac_store = new AutoCompleteStore();
const wine_vintage_store = new WineVintageStore();
const wine_list_store = new WineListStore();

function requireAuth(nextState, replace) {
  if (!auth.isLoggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/search" component={WineSearch}
            history={hashHistory}
            acStore={ac_store}
            onSearch={ac_store.getWords}
            onAutoCompleteSelected={wine_vintage_store.selectAutoComplete}
            wineVintageStore={wine_vintage_store}
            wineListStore={wine_list_store}
            onEnter={requireAuth}
            >
      </Route>
      <Route path="/wine_lists" component={WineLists}>
      </Route>
      <Route path="/login" component={Login}>
      </Route>
      <Route path="/logout" component={Logout}>
      </Route>
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
