import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import SearchBar from './search_bar';
import SearchResults from './search_results';
import WineDetail from './wine_detail'

class WineSearch extends Component {

  render() {
    return (
      <div className="row">
        <SearchBar
          onSearch={this.props.route.onSearch}
          acStore={this.props.route.acStore}
          onItemSelect={this.props.route.onAutoCompleteSelected}
          ></SearchBar>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <SearchResults
                store={this.props.route.wineVintageStore}
                onSelectWineVintage={this.props.route.wineVintageStore.selectWineVintage}
                />
            </div>
            <div className="col-md-4">
               <WineDetail
                 store={this.props.route.wineVintageStore}
                 ></WineDetail>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WineSearch;
