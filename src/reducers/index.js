import { combineReducers } from 'redux';

import photo from './photo';
import settings from './settings';
import dialog from './dialog';

export default combineReducers({
  photo,
  settings,
  dialog,
});
