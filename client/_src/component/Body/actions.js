 import {
   NEW_TEST,
 } from './constants';

 export function newTest(payload) {
   return {
     type: NEW_TEST,
     payload,
   };
 }
