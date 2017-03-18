### client/src/component/BlackBox
```javascript
import React from 'react';
import styles from './style.scss';
const BlackBox = (props) => {

  return (
    <div class={styles.container}>
      {props.children}
    </div>
  );
};

export default BlackBox;
```
### client/src/component/Form
```javascript
import React, { Component } from 'react';
import styles from './style.scss';
class Form extends Component {
  render() {
    return (
      <div class={styles.form}>
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
```
### client/src/component/Header
```javascript
import React from 'react';
import styles from './style.scss';
const Header = (props) => {

  const randomStyled = () => {
    const r = Math.floor(Math.random() * 201) - 80;
    return {
      transition: 'ease-out 1s',
      transform: `translate(${r * 2}px, ${r * 2}px) rotate(${r * 2}deg)`
    };
  }

  const mapHeader = props.smallHeader.map((index, i) => {
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
      <h1>{props.header}</h1>
      <span style={randomStyled()} class={styles.latest}>{props.latestHeader}</span>
      {mapHeader}
    </div>
  );
};

export default Header;
```
### client/src/component/Nav
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';
const Nav = (props) => {
  return (
    <nav class={styles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/get-start">Getting Started !</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
```
### client/src/component/Footer
```javascript
import React from 'react';
import styles from './style.scss';
const Footer = (props) => {

  return (
    <footer class={styles.footer}>Copyright © 2017 <a href="https://github.com/firstpersoncode" target="_blank">Nasser</a></footer>
  );
};

export default Footer;
```
