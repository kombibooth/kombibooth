import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './rounded.scss';

export default class PhotoImageRounded extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  };

  render () {
    const imageClassName = classNames('photo-image-rounded', this.props.size);

    return (
      <img src={ this.props.image } className={ imageClassName } />
    );
  }
}
