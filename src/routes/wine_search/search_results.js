import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class SearchResults extends Component {
  renderWineVintages() {
    return this.props.store.wineVintages.map( (wine_vintage) => {
      if (this.props.store.selectedWineVintage) {
        console.log(this.props.store.selectedWineVintage.id)
      }
      return(
        <li
           className="list-group-item"
           key={wine_vintage.wine_vintage_id}
           onClick={() => {this.props.onSelectWineVintage(wine_vintage.wine_vintage_id)}}
           style={this.props.store.selectedWineVintage && wine_vintage.wine_vintage_id == this.props.store.selectedWineVintage.id
             ? {boxShadow: "inset 0 0 60px #e3e3e3"} : {}}
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
