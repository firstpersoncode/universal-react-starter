import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <h2 style={{color: "#FFF"}}>Isomorphic Javascript App</h2>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(About);
