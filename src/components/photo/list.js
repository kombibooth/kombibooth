import React, { Component, PropTypes } from 'react';

export default class PhotoList extends Component {

  static propTypes = {
    photos: PropTypes.array,
  };

  render () {
    return (
      <div className="photo-list">
        <img src="" />
      </div>
    );
  }

}
