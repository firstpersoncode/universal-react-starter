import Immutable from 'immutee';

const initialState = {};

export default function(state = initialState, action) {
  const immutable = Immutable(state);
  switch (action.type) {
    default:
      return state;
  }
}
