/**
 * Created by Chen on 2016-08-24.
 */
import deepFreeze from "deep-freeze";
const toggleTodo = (todo)=> Object.assign({}, todo, {completed: !todo.completed});

describe("toggleTodo", ()=> {
  it("toggles the todo's complete state from false to true", ()=> {
    let prevTodo = {
          id: 0,
          text: "Learn Redux",
          completed: false
        },
        newTodo = {
          id: 0,
          text: "Learn Redux",
          completed: true
        };
  
    deepFreeze(prevTodo);
    expect(
        toggleTodo(prevTodo)
    ).toEqual(newTodo);
  })
});