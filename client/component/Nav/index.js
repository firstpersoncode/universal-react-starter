import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';
const Nav = (props) => {
  return (
    <nav class={styles.nav}>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/sample">sample</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/docs">docs</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
