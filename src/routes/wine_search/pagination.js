import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

class Pagination extends Component {
  render() {
    return (
      <nav className="pull-right">
        <ul className="pagination">
          <li className="disables"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
          <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
          <li className=""><a href="#">2 <span className="sr-only">(current)</span></a></li>
          <li className=""><a href="#">3 <span className="sr-only">(current)</span></a></li>
          <li className=""><a href="#">4 <span className="sr-only">(current)</span></a></li>
          <li className="disables"><a href="#" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>
        </ul>
      </nav>
    )
  }
}

export default Pagination;
