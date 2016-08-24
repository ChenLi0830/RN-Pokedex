/**
 * Created by Chen on 2016-08-24.
 */

// Reducer (function that manages state updates)
const counter = (state = 0, action) => {
  switch(action.type) {
    case "DECREMENT": return state > 0 ? state - 1 : 0;
    case "INCREMENT": return state+1;
    default: return state;
  }
};

import {createStore} from "redux";

let store = createStore(counter);

store.subscribe(()=>{
  console.warn("Application state is updated:", store.getState());
});

// setInterval(()=>{
  store.dispatch({type: "INCREMENT"});
// },2000);

export default counter;



