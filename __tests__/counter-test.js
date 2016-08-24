/**
 * Created by Chen on 2016-08-24.
 */

import counter from "../src/counter";
describe('counter', () => {
  it("increment state 1 to 2", () => {
    expect(counter(1, {type: "INCREMENT"})).toBe(2);
  });
  
  it("increment state 0 to 1", () => {
    expect(counter(0, {type: "INCREMENT"})).toBe(1);
  });
  
  it("Decrement state from 3 to 2", ()=>{
    expect(counter(3, {type: "DECREMENT"})).toBe(2);
  });
  
  it("Decrement state from 0 to 0", ()=>{
    expect(counter(0, {type: "DECREMENT"})).toBe(0);
  });
  
  it("test unexpected action", ()=>{
    expect(counter(3, {type: "SomethingElse"})).toBe(3);
  });
  
  it("unexpected state", ()=>{
    expect(counter(undefined, {type: "INCREMENT"})).toBe(1);
  });
  
  it("unexpected state", ()=>{
    expect(counter(undefined, {type: "DECREMENT"})).toBe(0);
  });
});
