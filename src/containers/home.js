import React, { Component } from 'react';

import PhotoTake from '../components/photo/take';
import PhotoItem from '../components/photo/item';

export default class Home extends Component {
  render () {
    return (
      <div>
        <PhotoItem />
        <PhotoTake />
      </div>
    );
  }
}
