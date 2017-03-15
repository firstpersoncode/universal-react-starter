import React from 'react';
import styles from './style.css';
const Header = (props) => {
  const mapHeader = props.smallHeader.map((index, i) => {
    return (<span key={i}>{index.data}</span>);
  });
  return (
    <div class={styles.header}>
      <h1>{props.header}</h1>
      {mapHeader}
    </div>
  );
};

export default Header;
