import React, { Component, PropTypes } from 'react';


import './photo-booth.scss';

export default class PhotoBooth extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  componentDidMount () {
    document.body.className += 'photo-booth-body';
  }

  render () {
    return (
      <div className="photo-booth">
        { this.props.children }
      </div>
    );
  }
}
