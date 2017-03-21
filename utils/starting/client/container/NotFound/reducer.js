import Immutable from 'immutee';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = {
  data: [],
  isLoading: true,
  error: null
};

export default function(state = initialState, action) {
  const immutable = Immutable(state);
  switch (action.type) {

    case DEFAULT_ACTION:
      return immutable
      .set('isLoading', action.loading)
      .set('error', action.error)
      .done();

    default:
      return state;
  }
}
