import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import SearchBar from './search_bar';
import SearchResults from './search_results';
import WineDetail from './wine_detail'
import Facets from './facets';
import Criteria from './criteria'
import Pagination from './pagination'

class WineSearch extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar
             onSearch={this.props.route.onSearch}
             acStore={this.props.route.acStore}
             onItemSelect={this.props.route.onAutoCompleteSelected}
             ></SearchBar>

        </div>
        <div className="row">
          <div className="col-md-8">
            <Criteria store={this.props.route.wineVintageStore}></Criteria>
          </div>
          <div className="col-md-4 pagination">
            <Pagination store={this.props.route.wineVintageStore}></Pagination>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Facets
               store={this.props.route.wineVintageStore}>
            </Facets>
          </div>
          <div className="col-md-5">
            <SearchResults
               store={this.props.route.wineVintageStore}
               onSelectWineVintage={this.props.route.wineVintageStore.selectWineVintage}
               />
          </div>
          <div className="col-md-4">
            <WineDetail
               store={this.props.route.wineVintageStore}
               wineListStore={this.props.route.wineListStore}
               ></WineDetail>
          </div>
        </div>
      </div>
    );
  }
}

export default WineSearch;
