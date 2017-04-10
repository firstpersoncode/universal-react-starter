import Immutable from 'immutee';
import {
  DEFAULT_ACTION,
  CHECK_VIEWPORT,
} from './constants';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
  isMobile: false,
};

export default function(state = initialState, action) {
  const immutable = Immutable(state);
  switch (action.type) {

    case DEFAULT_ACTION:
      return immutable
      .set('isLoading', action.loading)
      .set('error', action.error)
      .done();

    case CHECK_VIEWPORT:
      return immutable
      .set('isMobile', action.isMobile)
      .done();

    default:
      return state;
  }
}
