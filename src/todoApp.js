/**
 * Created by Chen on 2016-08-26.
 */
import {combineReducers} from "redux";
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      } else {
        return {
          ...state,
          completed: !state.completed
        }
      }
  }
};

const todos = (state = [], action)=> {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(null, action)
      ];
    
    case "TOGGLE_TODO":
      return state.map((t)=> todo(t, action));
    
    case "DELETE_TODO":
      let t = state.filter((todo)=> todo.id === action.id)[0];
      if (t && t.completed) {
        return state.filter((todo)=>todo.id !== action.id)
      }
      else {
        console.log("Uncompleted task can't be deleted");
        return state;
      }
    
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action)=> {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoApp =  combineReducers({
  todos: todos,
  filter: visibilityFilter,
});

export default todoApp;