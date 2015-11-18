import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PhotoImageRounded from '../../components/photo/image/rounded';

const PhotoList = (props) => {
  return (
    <div className="photo-list">
      <ul>
        {
          props.photos.map((photo, index) =>
            <li key={index}>
              <PhotoImageRounded image={ photo } size="small" />
            </li>
          )
        }
      </ul>
    </div>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
};

function mapStateToProps (state) {
  return {
    photos: state.photo.photos,
  };
}

export default connect(mapStateToProps)(PhotoList);
