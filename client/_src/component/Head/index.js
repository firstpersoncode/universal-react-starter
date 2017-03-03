import React from 'react';
import { connect } from 'react-redux';
import { newTest } from './actions';

class Head extends React.Component {
  render() {
    return (
      <h1>{this.props.initial}</h1>
    );
  }
}

export default connect((store) => {
  return {
    initial: store.bodyState.initial,
  }
})(Head);
