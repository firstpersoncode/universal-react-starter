### client/src/container/NotFound
```javascript
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import BlackBox from '../../component/BlackBox';
import styles from './style.css';

class NotFound extends Component {
  render() {
    return (
      <div class={styles.bg}>
        <Helmet
          title="404 not found" />
        <BlackBox>
          <h2>Page Not Found :(</h2>
        </BlackBox>
      </div>
    );
  }
}

export default connect((store) => {
  return {}
})(NotFound);
```
### client/src/container/NotFound/style
```css
.bg {
  position: absolute;
  left: 0;right: 0;top: 0;bottom: 0;
  z-index: -1;
  box-shadow: inset 0 -100px 250px 50px rgba(0,0,0,0.3);
  background: #DDD;
  overflow: hidden;
}
```
