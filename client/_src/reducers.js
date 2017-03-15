import { combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'

import homeState from "./container/Home/reducer";

export default combineReducers({
  homeState,
  router: routerReducer,
});
