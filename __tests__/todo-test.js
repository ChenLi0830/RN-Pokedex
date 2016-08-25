/**
 * Created by Chen on 2016-08-24.
 */
import {createStore, combineReducers} from 'redux';

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

let store = createStore(todoApp);

describe("todo", ()=> {
  it("add a new todo to the list", ()=> {
    let action = {
          type: "ADD_TODO",
          id: 0,
          text: "Learn Redux",
        },
        stateAfter = {
          todos: [{
            id: 0,
            text: "Learn Redux",
            completed: false,
          }],
          filter: "SHOW_ALL"
        };
    
    store.dispatch(action);
    
    expect(store.getState()).toEqual(stateAfter);
  });
  
  it("Add another new todo to the list", ()=> {
    let action = {
          type: "ADD_TODO",
          id: 1,
          text: "Redux is Fun",
        },
        stateAfter = {
          todos: [{
            id: 0,
            text: "Learn Redux",
            completed: false,
          }, {
            id: 1,
            text: "Redux is Fun",
            completed: false,
          }],
          filter: "SHOW_ALL"
        };
    
    store.dispatch(action);
    
    expect(store.getState()).toEqual(stateAfter);
  });
  
  it("Toggle a todo's state of completion from false to true", ()=> {
    let action = {
          type: "TOGGLE_TODO",
          id: 0,
        },
        stateAfter = {
          todos: [{
            id: 0,
            text: "Learn Redux",
            completed: true,
          }, {
            id: 1,
            text: "Redux is Fun",
            completed: false,
          }],
          filter: "SHOW_ALL"
        };
    
    store.dispatch(action);
    expect(store.getState()).toEqual(stateAfter);
  });
});

describe("filter", ()=> {
  it("Change the filter to 'SHOW_COMPLETED'", ()=> {
    let action = {
          type: "SET_VISIBILITY_FILTER",
          filter: "SHOW_COMPLETED"
        },
        stateAfter = {
          todos: [{
            id: 0,
            text: "Learn Redux",
            completed: true,
          }, {
            id: 1,
            text: "Redux is Fun",
            completed: false,
          }],
          filter: "SHOW_COMPLETED"
        };
    
    store.dispatch(action);
    expect(store.getState()).toEqual(stateAfter);
  });
});


