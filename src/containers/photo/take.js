import React, { Component } from 'react';

import PhotoWebcamContainer from './webcam';
import PhotoListContainer from './list';
import Logo from '../../components/layout/logo';

export default class PhotoTake extends Component {
  render () {
    return (
      <div className="photo-take-page">
        <div className="logo">
          <Logo type="horizontal" />
        </div>
        <PhotoWebcamContainer />
        <div className="photo-list-horiziontal">
          <PhotoListContainer />
        </div>
      </div>
    );
  }
}
