import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class WineDetails extends Component {

  render() {
    if (this.props.store.selectedWineVintage == null) {
      return <div></div>
    }

    return (
      <div>
        {this.props.store.selectedWineVintage.winery_name}
      </div>
    )
  }
}

export default WineDetails;
