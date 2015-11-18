import {
  PHOTO_CAPTURED,
} from '../actions/photo';

const INITIAL_STATE = {
  photos: [],
};

export default function photo (state = INITIAL_STATE, action) {
  switch (action.type) {
  case PHOTO_CAPTURED:
    return {
      ...state,
      photos: state.photos.concat([action.photo]),
    };
  default:
    return state;
  }
}
