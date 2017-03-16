import React from 'react';
import styles from './style.css';
const BlackBox = (props) => {

  return (
    <div class={styles.container} onMouseEnter={props.onMouseEnter ? props.onMouseEnter : null }>
      {props.children}
    </div>
  );
};

export default BlackBox;
