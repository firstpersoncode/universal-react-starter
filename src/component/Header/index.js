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
