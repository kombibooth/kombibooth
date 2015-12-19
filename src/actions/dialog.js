export const DIRECTORY_DIALOG_REQUEST = 'DIRECTORY_DIALOG_REQUEST';
export const DIRECTORY_DIALOG_SUCCESS = 'DIRECTORY_DIALOG_SUCCESS';
export const DIRECTORY_DIALOG_MISSED = 'DIRECTORY_DIALOG_MISSED';

import * as remote from '../remote';

export function openDirectoryDialog (target) {
  return async (dispatch) => {
    dispatch({ type: DIRECTORY_DIALOG_REQUEST, target });

    try {
      const directory = await remote.dialog.openDirectoryDialog();
      dispatch({ type: DIRECTORY_DIALOG_SUCCESS, target, directory });
    } catch (error) {
      dispatch({ type: DIRECTORY_DIALOG_MISSED, target });
    }
  };
}
