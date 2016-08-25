/**
 * Created by Chen on 2016-08-24.
 */
import deepFreeze from 'deep-freeze';
import {createStore} from 'redux';

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

const reducer = (state = [], action)=> {
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

const visibilityFilter = (state="SHOW_ALL", action)=>{
  switch(action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoApp = (state = {}, action)=>{
  return {
    todos: reducer(
        state.todos,
        action
    ),
    filter: visibilityFilter(
        state.filter,
        action
    )
  }
};

let store = createStore(todoApp);

describe("todo", ()=>{
  it("add a new todo to the list", ()=>{
    let stateAfter = {
      todos: [{
        id: 0,
        text: "Learn Redux",
        completed: false,
      }],
      filter: "SHOW_ALL"
    };
    
    store.dispatch({
      type: "ADD_TODO",
      id: 0,
      text: "Learn Redux",
    });
    
    expect(store.getState()).toEqual(stateAfter);
  });
});


/*
describe("todo", ()=> {
  // let store = createStore()
  it("add a new todo to the list", ()=> {
    let stateBefore = [],
        action = {
          type: "ADD_TODO",
          id: 0,
          text: "Learn Redux",
        },
        stateAfter = [{
          id: 0,
          text: "Learn Redux",
          completed: false,
        }];
    
    deepFreeze(stateBefore);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  
  it("Unsuccesssfully remove a todo which is not completed", ()=> {
    let stateBefore = [{
          id: 0,
          text: "Learn Redux",
          completed: false,
        }],
        action = {
          type: "DELETE_TODO",
          id: 0,
        },
        stateAfter = [{
          id: 0,
          text: "Learn Redux",
          completed: false,
        }];
    
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  
  it("Successfully remove a todo which is completed", ()=> {
    let stateBefore = [{
          id: 0,
          text: "Learn Redux",
          completed: true,
        }, {
          id: 1,
          text: "Redux is Fun",
          completed: false,
        }],
        action = {
          type: "DELETE_TODO",
          id: 0,
        },
        stateAfter = [{
          id: 1,
          text: "Redux is Fun",
          completed: false,
        }];
    
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  
  it("Toggle a todo's state of completion from true to false", ()=> {
    let stateBefore = [{
          id: 0,
          text: "Learn Redux",
          completed: true,
        }, {
          id: 1,
          text: "Redux is Fun",
          completed: true,
        }],
        action = {
          type: "TOGGLE_TODO",
          id: 1
        },
        stateAfter = [{
          id: 0,
          text: "Learn Redux",
          completed: true,
        }, {
          id: 1,
          text: "Redux is Fun",
          completed: false,
        }];
    
    deepFreeze(stateBefore);
    deepFreeze(action);
    
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  })
});
*/






