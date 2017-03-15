import React from 'react';
import styles from './style.css';
const BlackBox = (props) => {

  return (
    <div class={styles.container}>
      {props.children}
    </div>
  );
};

export default BlackBox;
