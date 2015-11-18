import React, { Component } from 'react';

import PhotoWebcamContainer from './webcam';
import Logo from '../../components/layout/logo';

export default class PhotoTake extends Component {
  render () {
    return (
      <div className="photo-take-page">
        <div className="logo">
          <Logo type="horizontal" />
        </div>
        <PhotoWebcamContainer />
      </div>
    );
  }
}
