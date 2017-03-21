import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "../reducers";

let middlewares;

if (process.env.NODE_ENV === "production") {
  middlewares = [
    promise(),
    thunk
  ];
} else {
  middlewares = [
    promise(),
    thunk,
    logger()
  ];
}

const createStoreWithMiddleWare = applyMiddleware(
  ...middlewares
)(createStore);

export default (initialState) => {
  const store = createStoreWithMiddleWare(combineReducers(reducers), initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = combineReducers(require('../reducers'));
      store.replaceReducer(nextReducer)
    })
  }

  return store;
}
