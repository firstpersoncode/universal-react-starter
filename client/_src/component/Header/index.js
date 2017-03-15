import React from 'react';
const Header = (props) => {
  const mapHeader = props.smallHeader.map((index, i) => {
    return (<span key={i}>{index.data}</span>);
  });
  return (
    <div class="header">
      <h1>{props.header}</h1>
      {mapHeader}
    </div>
  );
};

export default Header;
