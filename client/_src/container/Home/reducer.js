import Immutable from 'immutee';
import {
  SET_HEADER,
  FETCH_HEADER,
  FETCH_HEADER_FAILURE,
} from './constants';

const initialState = {
  header: 'Simple Setup Isomorphic javascript App',
  smallHeader: [],
  error: null,
};

export default function(state = initialState, action) {
  const immutable = Immutable(state);
  switch (action.type) {
    case SET_HEADER: {
      return immutable.set('header', action.payload).merge('smallHeader', [{data: action.payload}]).done();
      break;
    }
    case FETCH_HEADER: {
      return immutable.merge('smallHeader', action.payload).done();
      break;
    }
    case FETCH_HEADER_FAILURE: {
      return immutable.set('error', action.payload).done();
      break;
    }
    default:
      return state;
  }
}
