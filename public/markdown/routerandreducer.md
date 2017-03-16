### client/src/routers
```javascript
import React from 'react';
import About from "./container/About";
import Docs from "./container/Docs";

export default [{
  path: '/about',
  component: About,
}, {
  path: '/documentation',
  component: Docs,
}];
```
### client/src/reducers
```javascript
import { combineReducers } from 'redux';

import homeState from "./container/Home/reducer";
import aboutState from "./container/About/reducer";
import docsState from "./container/Docs/reducer";
import notFoundState from "./container/NotFound/reducer";

export default combineReducers({
  homeState,
  aboutState,
  docsState,
  notFoundState
});
```
