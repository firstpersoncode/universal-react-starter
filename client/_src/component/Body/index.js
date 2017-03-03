import React from 'react';
import { connect } from 'react-redux';

class Body extends React.Component {
  render() {
    return (
      <div>
        {this.props.initial}
      </div>
    );
  }
}

export default connect((store) => {
  return {
    initial: store.bodyState.initial,
  }
})(Body);
