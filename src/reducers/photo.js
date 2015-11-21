import {
  PHOTO_CAPTURED,
  PHOTO_ALL_CAPTURED,
} from '../actions/photo';

const INITIAL_STATE = {
  photos: [],
  shouldStopCapture: false,
};

export default function photo (state = INITIAL_STATE, action) {
  switch (action.type) {
  case PHOTO_CAPTURED:
    return {
      ...state,
      photos: state.photos.concat([action.photo]),
      shouldStopCapture: false,
    };
  case PHOTO_ALL_CAPTURED:
    return {
      ...state,
      photos: state.photos.concat([action.photo]),
      shouldStopCapture: true,
    };
  default:
    return state;
  }
}
