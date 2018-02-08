import { combineReducers } from 'redux';

import NavReducer from './NavReducer';
import PrescriptionReducer from './PrescriptionReducer';

export default combineReducers({
  nav: NavReducer,
  rx: PrescriptionReducer,
});
