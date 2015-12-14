import {
  FETCH_SETTINGS_SUCCESS,
  FETCH_SETTINGS_REQUEST,
  FETCH_SETTINGS_FAILURE,
} from '../actions/settings';

const INITIAL_STATE = {
  settings: {},
  isFetching: false,
  didInvalidate: false,
  error: null,
};

export default function photo (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_SETTINGS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: true,
      settings: action.settings,
      error: null,
    };
  case FETCH_SETTINGS_REQUEST:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false,
      error: null,
    };
  case FETCH_SETTINGS_FAILURE:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      error: action.error,
    };
  default:
    return state;
  }
}
