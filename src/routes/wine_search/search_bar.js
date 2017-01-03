import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { observer } from 'mobx-react';

@observer
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      words: []
    };
    this.onSearch = this.props.onSearch;
  }

  render() {
    return (
      <div className="searchbar">
        <div className="col-md-3"></div>
        <div
          className="col-md-5 autocomplete"
          >
          <Autocomplete
            value={this.state.term}
            items={this.props.acStore.words}
            wrapperStyle={{zIndex: 1000}}
            onChange={(event, value) => {
              this.setState({term: value});
              this.props.onSearch(this.state.term);
            }}
            onSelect={(value, item) => {
              this.props.onItemSelect(item.criterion);
            }}
            getItemValue={(item) => item.word}
            renderItem={(item, isHighlighted) => (
              <div
                className="ac-result"
                style={isHighlighted ? {backgroundColor: "#eee", color: "#37474F"} : {}}
                >
                {item.word}
              </div>
            )}
            erenderMenu={children =>
              <div style={{
                  borderRadius: "3px",
                  position: "absolute",
                  overflow: "auto",
                  width: "100%"
                }}>
                {children}
              </div>
            }
            />
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.onSearch(term);
  }
}

export default SearchBar;
