import { combineReducers } from 'redux';

import photo from './photo';
import settings from './settings';


export default combineReducers({
  photo,
  settings,
});
