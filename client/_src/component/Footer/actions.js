 import {
   NEW_TEST,
 } from '../Body/constants';

 export function newTest(payload) {
   return {
     type: NEW_TEST,
     payload,
   };
 }
