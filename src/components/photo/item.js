import React, { Component, PropTypes } from 'react';

export default class PhotoItem extends Component {

  static propTypes = {
    photo: PropTypes.array,
  };

  render () {
    return (
      <div className="photo-item">
        <img src="http://placehold.it/350x150" />
      </div>
    );
  }

}
