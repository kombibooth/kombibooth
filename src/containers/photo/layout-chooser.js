import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PhotoBooth from '../../components/layout/photo-booth';

class LayoutChooser extends Component {
  static propTypes = {
    photo: PropTypes.object.isRequired,
  };

  render () {
    return (
      <PhotoBooth>
        <h1>Layout Chooser</h1>
      </PhotoBooth>
    );
  }
}

function mapStateToProps (state) {
  return {
    photo: state.photo,
  };
}

export default connect(mapStateToProps)(LayoutChooser);
