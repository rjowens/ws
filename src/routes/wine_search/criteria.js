import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

@observer
class Criteria extends Component {
  renderCriteria() {
    return this.props.store.criteria.map((c) => {
      console.log(c)
      return <a href="#"
        className="list-group-item"
        onClick={(evt) => {
          evt.preventDefault()
          this.props.store.removeCriteria(c)
        }}
        key={c.criterion}
        >{c.substring(c.indexOf('"') + 1, c.lastIndexOf('"'))}</a>
    })
  }
  render() {
    if (this.props.store.criteria.length == 0) {
      return <div></div>;
    }
    return (
      <div className="row">
      <div className="col-md-0"></div>
      <div className="col-md-8">
        <div className="list-group list-group-horizontal">
          {this.renderCriteria()}
        </div>
      </div>
    </div>
    )
  }
}

export default Criteria;
