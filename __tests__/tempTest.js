/**
 * Created by Chen on 2016-08-24.
 */
import deepFreeze from 'deep-freeze';
const addCounter = (list)=> [...list, 0];

const removeCounter = (list, index)=> [
    ...list.slice(0, index),
    ...list.slice(index+1)
];

const incrementCounter = (list,index) => [
    ...list.slice(0, index),
    list[index]+1,
    ...list.slice(index+1)
];

describe("AddCounter", ()=>{
  it("add a new counter to the list", ()=>{
    let prevList = [10,20,1],
        newList = [10,20,1,0];
    
    deepFreeze(prevList);
    expect(
        addCounter(prevList)
    ).toEqual(newList);
  })
});

describe("removeCounter", ()=>{
  it("remove the counter at index i from a given list", ()=>{
    let prevList = [10,20,30,40],
        newList = [10,30,40];
  
    deepFreeze(prevList);
    expect(
        removeCounter(prevList, 1)
    ).toEqual(newList);
  })
});

describe("incrementCounter", ()=>{
  it("increase the counter at index for the list", ()=>{
    let prevList = [1,2,3], newList = [1,3,3];
    
    deepFreeze(prevList);
    expect(
        incrementCounter(prevList, 1)
    ).toEqual(newList);
  })
});