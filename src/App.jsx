import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Link } from 'react-router'
import auth from './service/auth_api'

class App extends Component {

  componentDidMount() {
    this.props.router.replace('/search');
  }

  render() {
    return (
      <div>
      <div className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/search">Wine Search</Link>
          </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to="/search" activeClassName="active">Search</Link></li>
              <li><Link to="/wine_lists" activeClassName="active">PWL</Link></li>
              <li><Link to="/saved_searches" activeClassName="active">Saved Searches</Link></li>
              <li><Link to="/search" activeClassName="active">Top 100</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
      </div>
      {this.props.children}
    </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default App;
