import React, { Component, PropTypes } from 'react';

import './rounded-box.scss';

export default class RoundedBox extends Component {

  static propTypes = {
    children: PropTypes.any,
  }

  render () {
    return (
      <div className="rounded-box">
        <div className="rounded-box-content">
          { this.props.children }
        </div>
      </div>
    );
  }

}
