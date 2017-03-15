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
    });
  }
}
