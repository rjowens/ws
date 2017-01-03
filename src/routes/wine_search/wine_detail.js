import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class WineDetails extends Component {

  render() {
    if (this.props.store.selectedWineVintage == null) {
      return <div></div>
    }

    const wv = this.props.store.selectedWineVintage;
    return (
      <div className="tasting-notes well">
        <div className="row">
          <div className="col-md-10">
            <div className="winery">
              {wv.winery_name}
            </div>
            <div>
              <span className="wine"> {wv.wine_name}</span> <span className="vintage">{wv.vintage}</span>
            </div>
          </div>
          <div className="col-md-2 score-holder">
            <div className="score pull-right">
              {wv.tasting_notes[0].score}
            </div>
          </div>
        </div>
        <hr />
        <span className="tasting-note">
          <p>{wv.tasting_notes[0].note}</p>
        </span>
      </div>
    )
  }
}

export default WineDetails;
