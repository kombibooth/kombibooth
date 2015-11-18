import React, { Component } from 'react';

import Webcam from 'react-webcam';

import './webcam.scss';

export default class PhotoWebcam extends Component {
  render () {
    return (
      <div className="photo-webcam">
        <Webcam width="1220" height="600" />
      </div>
    );
  }
}
