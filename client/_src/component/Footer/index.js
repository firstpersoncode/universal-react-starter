import React from 'react';
import { connect } from 'react-redux';
import { newTest } from './actions';

class Footer extends React.Component {
  constructor() {
    super();
    this.newTest = this.newTest.bind(this);
  }

  newTest(e) {
    e.preventDefault();
    var text = this.refs.chat;
    this.props.dispatch(newTest(text.value));
    text.value = "";
  }

  render() {
    return (
      <div class="footer">
        <form onSubmit={this.newTest}>
          <input type="text" ref="chat" placeholder="type ..." />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    initial: store.bodyState.initial,
  }
})(Footer);
