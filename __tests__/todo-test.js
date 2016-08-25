/**
 * Created by Chen on 2016-08-24.
 */
import deepFreeze from 'deep-freeze';

const reducer = (state, action)=> {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    
    case "DELETE_TODO":
      let todo = state.filter((todo)=> todo.id === action.id)[0];
      if (todo && todo.completed) {
        return state.slice(0).filter((todo)=>todo.id !== action.id)
      }
      else {
        console.log("Uncompleted task can't be deleted");
        return state;
      }
    
    case "TOGGLE_TODO":
      let todo = state.filter((todo)=> todo.id === action.id)[0];
      if (todo) {
        //todo return toggled list
        return
      } else {
        console.warn("Invalid id!");
        return state;
      }
    
    default:
      return state;
  }
};


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






