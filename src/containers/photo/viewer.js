import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PhotoBooth from '../../components/layout/photo-booth';
import PhotoImageRounded from '../../components/layout/photo-booth/image/rounded';

class PhotoViwer extends Component {
  static propTypes = {
    photo: PropTypes.object.isRequired,
  };

  render () {
    const { photos } = this.props.photo;

    return (
      <PhotoBooth>
        <div className="photo-viwer">
          <h1>Photo viwer</h1>
          <div className="photo-list">
            <ul>
              {
                photos.map((photo, index) =>
                  <li key={index}>
                    <PhotoImageRounded
                      image={ photo }
                      size="medium" />
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </PhotoBooth>
    );
  }
}

function mapStateToProps (state) {
  return {
    photo: state.photo,
  };
}

export default connect(mapStateToProps)(PhotoViwer);
