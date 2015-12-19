import { settings as remoteSettings } from '../remote';

export const FETCH_SETTINGS_REQUEST = 'FETCH_SETTINGS_REQUEST';
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
export const FETCH_SETTINGS_FAILURE = 'FETCH_SETTINGS_FAILURE';

export function fetchSettingsIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchSettings(getState())) {
      return dispatch(fetchSettings());
    }

    return Promise.resolve();
  };
}

function shouldFetchSettings (state) {
  const { settings } = state.settings;

  if (Object.keys(settings).length === 0) {
    return true;
  }

  if (settings.isFetching) {
    return false;
  }

  return settings.didInvalidate;
}

function fetchSettings () {
  return async (dispatch) => {
    dispatch({ type: FETCH_SETTINGS_REQUEST });

    try {
      const settings = await remoteSettings.load();
      dispatch({ type: FETCH_SETTINGS_SUCCESS, settings });
    } catch (error) {
      dispatch({ type: FETCH_SETTINGS_FAILURE, error});
    }
  };
}

export function saveSettings () {

}
