import {
  DIRECTORY_DIALOG_REQUEST,
  DIRECTORY_DIALOG_SUCCESS,
  DIRECTORY_DIALOG_MISSED,
} from '../actions/dialog';

const INITIAL_STATE = {
  isOpening: false,
  didInvalidate: false,
  target: null,
  directory: null,
};

export default function photo (state = INITIAL_STATE, action) {
  switch (action.type) {
  case DIRECTORY_DIALOG_REQUEST:
    return {
      ...state,
      target: action.target,
      didInvalidate: false,
      isOpening: true,
    };
  case DIRECTORY_DIALOG_SUCCESS:
    return {
      ...state,
      target: action.target,
      directory: action.directory,
      didInvalidate: true,
      isOpening: false,
    };
  case DIRECTORY_DIALOG_MISSED:
    return {
      ...state,
      target: action.target,
      isOpening: false,
      didInvalidate: false,
    };
  default:
    return state;
  }
}
