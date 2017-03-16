### client/src/container/About
```javascript
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import BlackBox from '../../component/BlackBox';
import styles from './style.css';

class About extends Component {
  render() {
    return (
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]}
          title="About" />
        <BlackBox>
          <h2>Isomorphic Javascript App</h2>
          <p>Copyright © 2017 Nasser</p>
        </BlackBox>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(About);
```
### client/src/container/About/style
```css
.bg {
  position: absolute;
  left: 0;right: 0;top: 0;bottom: 0;
  z-index: -1;
  box-shadow: inset 0 -100px 250px 50px rgba(0,0,0,0.3);
  background: red;
  overflow: hidden;
}
```
