import { combineReducers } from 'redux';

import homeState from "./container/Home/reducer";
import aboutState from "./container/About/reducer";
import notFoundState from "./container/NotFound/reducer";

export default combineReducers({
  homeState,
  aboutState,
  notFoundState,
});
