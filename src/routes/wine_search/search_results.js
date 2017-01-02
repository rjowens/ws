import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class SearchResults extends Component {
  renderWineVintages() {
    console.log (this.props.store)
    return this.props.store.wineVintages.map( (wine_vintage) => {
      console.log(wine_vintage);
      return(
        <li
           className="list-group-item"
           key={wine_vintage.wine_vintage_id}
           onClick={() => {this.props.onSelectWineVintage(wine_vintage.wine_vintage_id)}}
           >
           <div className="row">
             <div className="col-md-1 score">
                 {wine_vintage.score}
             </div>
             <div className="col-md-11">
               <span className="winery">{wine_vintage.winery_name}</span> {wine_vintage.wine_name} {wine_vintage.vintage}
             </div>
           </div>
        </li>
      );
    }                                   );
  }

  render() {
    return (
      <div className="row">
        {this.renderWineVintages()}
      </div>
    );
  }
}

export default SearchResults;
