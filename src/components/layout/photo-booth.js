import { Component, PropTypes } from 'react';

import './photo-booth.scss';

export default class PhotoBooth extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render () {
    return this.props.children;
  }
}
