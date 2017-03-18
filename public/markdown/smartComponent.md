### client/src/container/Home
```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import { setHeader, fetchHeaders } from './actions';
import Header from '../../component/Header';
import Form from '../../component/Form';
import BlackBox from '../../component/BlackBox';
import styles from './style.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      preview: 'react + react-redux + react-helmet + react-router-dom + express + mongoose + modular CSS !'
    };
    this.handlePreview = this.handlePreview.bind(this);
    this.handleSetHeader = this.handleSetHeader.bind(this);
  }

  componentWillMount() {
    if (!this.props.smallHeader.length)
      this.props.dispatch(fetchHeaders())
  }

  handlePreview(e) {
    this.setState({ preview: e.target.value })
  }

  handleSetHeader(e) {
    e.preventDefault();
    const text = this.refs.form.refs.textInput;
    this.props.dispatch(setHeader({data: text.value}));
    text.value = '';
  }

  render() {
    return (
      <div class={styles.bg}>
        <Helmet
          meta={[
            {name: "description", content: "Isomorphic javascript app"}
          ]} />
        <Header header={this.state.preview} smallHeader={this.props.smallHeader} latestHeader={this.props.header} />
        <BlackBox>
          <Form
            ref="form"
            handlePreview={this.handlePreview}
            handleSetHeader={this.handleSetHeader} />
        </BlackBox>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    header: store.homeState.header,
    smallHeader: store.homeState.smallHeader,
  }
})(Home);
```
### client/src/container/Home/constants
```javascript
export const SET_HEADER = 'Home/SET_HEADER';
export const FETCH_HEADER = 'Home/FETCH_HEADER';
export const FETCH_HEADER_FAILURE = 'Home/FETCH_HEADER_FAILURE';
```

### client/src/container/Home/actions
```javascript
import axios from 'axios';
import {
  SET_HEADER,
  FETCH_HEADER,
  FETCH_HEADER_FAILURE,
} from './constants';

export function setHeader(payload) {
  return (dispatch) => {
    return axios.post('http://localhost:50045/headers', payload)
    .then((res) => {
      dispatch({
        type: SET_HEADER,
        payload: payload.data
      });
    }).catch(() => {
      dispatch({
        type: SET_HEADER,
        payload: payload.data
      });
    });
  }
}

export function fetchHeaders() {
  return (dispatch) => {
    return axios.get('http://localhost:50045/headers')
    .then((res) => {
      console.log(res)
      dispatch({
        type: FETCH_HEADER,
        payload: res.data
      });
    }).catch((err) => {
      dispatch({
        type: SET_HEADER,
        payload: err.stack
      })
    });
  }
}
```

### client/src/container/Home/reducer
```javascript
import Immutable from 'immutee';
import {
  SET_HEADER,
  FETCH_HEADER,
  FETCH_HEADER_FAILURE,
} from './constants';

const initialState = {
  header: 'react + react-redux + react-helmet + react-router-dom + express + mongoose + modular CSS !',
  smallHeader: [],
  error: null,
};

export default function(state = initialState, action) {
  const immutable = Immutable(state);
  switch (action.type) {
    case SET_HEADER: {
      return immutable.set('header', action.payload).merge('smallHeader', [{data: action.payload}]).done();
      break;
    }
    case FETCH_HEADER: {
      return immutable.merge('smallHeader', action.payload).done();
      break;
    }
    case FETCH_HEADER_FAILURE: {
      return immutable.set('error', action.payload).done();
      break;
    }
    default:
      return state;
  }
}
```
### client/src/container/Home/style
```css
.bg {
  position: absolute;
  left: 0;right: 0;top: 0;bottom: 0;
  z-index: -1;
  box-shadow: inset 0 -100px 250px 50px rgba(0,0,0,0.3);
  background: #c4daff;
  overflow: hidden;
}
```
