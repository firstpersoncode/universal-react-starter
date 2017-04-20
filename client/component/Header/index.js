import React, { Component } from 'react';
import root from 'window-or-global';
import styles from './style.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      floatStyle: {
        transform: `rotate(0)`
      }
    };
    this.width = Math.max(root.innerWidth);
    this.floatStyle = this.floatStyle.bind(this);
  }

  componentDidMount() {
    if (this.width > 1025) {
      root.document.addEventListener("mousemove", this.floatStyle);
    }
  }

  componentWillUnmount() {
    if (this.width > 1025) {
      root.document.removeEventListener("mousemove", this.floatStyle);
    }
  }

  floatStyle(e) {
    this.setState({
      floatStyle: {
        transform: `rotate(${(e.clientX - this.width / 2) / 50}deg)`
      }
    })
  }

  render() {
    const randomStyled = () => {
      const r = Math.floor(Math.random() * 201) - 80;
      return {
        transition: Math.max(root.innerWidth) > 1025 ? 'ease-out 15s' : 'linear .5s',
        transform: `translate(${r * 2}px, ${r * 2}px) rotate(${r * 2}deg)`
      };
    }

    const mapHeader = this.props.smallHeader.map((index, i) => {
      return (
        <span
          style={randomStyled()}
          key={i}>
          {index.data}
        </span>
      );
    });

    return (
      <div class={styles.header}>
        <h1>{this.props.header}</h1>
        <div class={styles.floatContainer} style={this.state.floatStyle}>
          <span style={randomStyled()} class={styles.latest}>{this.props.latestHeader}</span>
          {mapHeader}
        </div>
      </div>
    );
  }
};

export default Header;
