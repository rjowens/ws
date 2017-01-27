import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { observer } from 'mobx-react'

@observer
class Facets extends Component {

  renderFacetGroup(facet) {
    return this.props.store.facets[`${facet}`].map( (f) => {
      return <li
        onClick={(evt) => {
          evt.preventDefault()
          this.props.store.getWineVintages(f.criterion)}
        }
        key={f.criterion}
        >{f.column} ({f.count})</li>
    })
  }

  renderFacets() {
    return Object.keys(this.props.store.facets).map( (facet) => {
      return <div className="facet-group">
        <div className="facet-header" key={facet.column}>{facet}</div>
        <ul>
          {this.renderFacetGroup(facet)}
        </ul>
      </div>
    })
  }

  render() {
    console.log (this.props.store)
    if (this.props.store.facets == null || this.props.store.facets.length == 0) {
      return <div></div>
    }

    return (
      <div className="well">
        {this.renderFacets()}
      </div>
    )
  }
}

export default Facets;
