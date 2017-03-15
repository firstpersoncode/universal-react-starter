import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from "./reducers";

const history = createHistory()

const middleware = applyMiddleware(routerMiddleware(history), promise(), thunk, logger());

export default createStore(reducers, middleware);
