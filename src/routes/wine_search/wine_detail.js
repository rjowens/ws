import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class WineDetails extends Component {


  renderPriorNotes(notes) {
    if (notes.length < 2) {
      return null;
    }
    const a = notes.map((note) => {
      return <div>
        <hr/>
        {note.note}
      </div>
    })
    return <div>
      <hr />
      <h4>Prior Notes</h4>
      {a}
    </div>
  }

  render() {
    if (this.props.store.selectedWineVintage == null) {
      return <div></div>
    }

    const wv = this.props.store.selectedWineVintage;
    return (
      <div>
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
          <p><label>Issue Date:</label>{wv.tasting_notes[0].issue_date}</p>
        </span>
        <div className="secondary-notes">
          {this.renderPriorNotes(wv.tasting_notes.slice(1))}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="input-group">

            <input type="text" className="form-control"></input>

            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Add To PWL</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default WineDetails;
