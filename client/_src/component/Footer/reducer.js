import Immutable from 'immutee';
import {
  NEW_TEST,
} from './constants';
const initialState = {
  initial: '',
};


export default function(state = initialState, action) {
  const immutable = Immutable(state);
  switch (action.type) {
    case NEW_TEST: {
      return immutable.set('initial', action.payload).done();
      break;
    }
    default:
      return state;
  }
}
