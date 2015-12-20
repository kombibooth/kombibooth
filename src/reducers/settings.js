import {
  FETCH_SETTINGS_SUCCESS,
  FETCH_SETTINGS_REQUEST,
  FETCH_SETTINGS_FAILURE,
  SAVE_SETTINGS_SUCCESS,
  SAVE_SETTINGS_REQUEST,
  SAVE_SETTINGS_FAILURE,
} from '../actions/settings';

const INITIAL_STATE = {
  settings: {},
  isFetching: false,
  didInvalidate: false,
  error: null,
};

export default function settings (state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_SETTINGS_SUCCESS:
    return {
      ...state,
      isSaving: false,
      isFetching: false,
      didInvalidate: true,
      settings: action.settings,
      error: null,
    };
  case FETCH_SETTINGS_REQUEST:
    return {
      ...state,
      isSaving: false,
      isFetching: true,
      didInvalidate: false,
      error: null,
    };
  case FETCH_SETTINGS_FAILURE:
    return {
      ...state,
      isSaving: false,
      isFetching: false,
      didInvalidate: false,
      error: action.error,
    };
  case SAVE_SETTINGS_REQUEST:
    return {
      ...state,
      isFetching: false,
      isSaving: true,
      didInvalidate: false,
      error: null,
    };
  case SAVE_SETTINGS_SUCCESS:
    return {
      ...state,
      settings: action.settings,
      isFetching: false,
      isSaving: false,
      didInvalidate: true,
      error: null,
    };
  case SAVE_SETTINGS_FAILURE:
    return {
      ...state,
      isFetching: false,
      isSaving: false,
      didInvalidate: false,
      error: action.error,
    };
  default:
    return state;
  }
}
