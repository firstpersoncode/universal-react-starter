import React, { Component } from 'react';
class Form extends Component {
  render() {
    return (
      <div class="form">
        <span>{this.props.preview}</span>
        <form onSubmit={this.props.handleSetHeader}>
          <input type="text" ref="textInput" placeholder="type ..." onChange={this.props.handlePreview} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default Form;
