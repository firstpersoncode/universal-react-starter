import React from 'react';
import styles from './style.css';

const Loading = (props) => {
  return (
    <div class={styles['Loading']}>
      <div class={styles["Loading-arc"]}>
    		<div class={styles["Loading-cube"]}></div>
    	</div>
    </div>
  );
};

export default Loading;
