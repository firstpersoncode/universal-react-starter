import React from 'react';
import styles from './style.css';
const PreviewBox = (props) => {
  return (
    <div class={styles.preview}>
      {props.preview}
    </div>
  );
};

export default PreviewBox;
