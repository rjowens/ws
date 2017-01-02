import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Link } from 'react-router'
@observer
class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
            <ul>
              <li><Link to="/search">Search</Link></li>
            </ul>
            {this.props.children}
            <DevTools />
        </div>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
