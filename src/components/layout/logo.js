import React, { Component, PropTypes } from 'react';

import vertical from './logo-vertical.png';
import horizontal from './logo-horizontal.png';

export default class Logo extends Component {

  static propTypes = {
    type: PropTypes.string,
  }

  render () {
    const { type } = this.props;

    if (type && type === 'vertical') {
      return (
        <img src={ vertical } />
      );
    }

    return (
      <img src={ horizontal } />
    )
  }

}
