import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';

import WineSearch from './routes/wine_search/wine_search';
import SearchResults from './routes/wine_search/search_results';

import AutoCompleteStore from './stores/autocomplete';
import WineVintageStore from './stores/wine_vintage';
var Promise = require("bluebird");

const ac_store = new AutoCompleteStore();
const wine_vintage_store = new WineVintageStore();

render(
  <Router history={hashHistory}>
    <Route path="/" component={WineSearch}
           history={hashHistory}
           acStore={ac_store}
           onSearch={ac_store.getWords}
           onAutoCompleteSelected={wine_vintage_store.getWineVintages}
           wineVintageStore={wine_vintage_store}
           >
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
