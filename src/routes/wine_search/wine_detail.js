import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Autocomplete from 'react-autocomplete';

@observer
class WineDetails extends Component {
  constructor(props) {
    super(props);

    this.addToPWL = this.addToPWL.bind(this)
    this.state = {
      wine_list_term: ''
    };
  }

  renderPriorNotes(notes) {
    if (notes.length < 2) {
      return null;
    }
    const a = notes.map((note) => {
      return <div>
        <hr/>
        {note.note}
      </div>;
    });
    return <div>
      <hr />
      <h4>Prior Notes</h4>
      {a}
    </div>;
  }

  addToPWL() {
    this.props.wineListStore.addToWineList(this.state.wine_list_id, this.props.store.selectedWineVintage.id)
  }

  componentDidMount() {
    this.props.wineListStore.getWineLists();
  }

  render() {
    if (this.props.store.selectedWineVintage == null) {
      return <div></div>;
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
            <div className="input-group autocomplete">
              <Autocomplete
                 value={this.state.wine_list_term}
                 items={this.props.wineListStore.wine_lists}
                 onChange={(event, value) => {
                   this.setState({wine_list_term: value});
                   this.props.wineListStore.getWineLists(value);
                }}
                getItemValue={(item) => item.name}
                onSelect={(value, item) => {
                  this.setState({
                    wine_list_term: value,
                    wine_list_id: item.id
                  });
                }}
                renderItem={(item, isHighlighted) => (
                  <div
                     className="ac-result"
                     style={isHighlighted ? {backgroundColor: "#eee", color: "#37474F"} : {}}
                     >{item.name}</div>
                )}
                wrapperStyle={{"paddingRight" : "10px"}}
                />
                <span className="input-group-btn">
                  <button
                    onClick={this.addToPWL}
                    className="btn btn-default"
                    type="button">
                  Add To PWL</button>
                </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WineDetails;
