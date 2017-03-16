import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
const Nav = (props) => {
  return (
    <nav class={styles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/documentation">documentation</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
