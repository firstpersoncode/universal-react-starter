import { combineReducers } from 'redux';

import headState from "./component/Head/reducer";
import bodyState from "./component/Body/reducer";
import footerState from "./component/Footer/reducer";

export default combineReducers({
  headState,
  bodyState,
  footerState,
});
