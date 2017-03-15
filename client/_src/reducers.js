import { combineReducers } from 'redux';

import homeState from "./container/Home/reducer";
import aboutState from "./container/About/reducer";

export default combineReducers({
  homeState,
  aboutState,
});
