import React from 'react';
import { Link } from 'react-router-dom';
import root from 'window-or-global';
import styles from './style.scss';

const Nav = (props) => {
  return (
    <nav class={styles.nav}>
      <ul>
        <li><Link to="/">home</Link></li>
        {Math.max(root.innerWidth) > 1025 && (<li><Link to="/sample">sample</Link></li>)}
        <li><Link to="/about">about</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
