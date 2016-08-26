/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reducer from "./src/todoApp";
import TodoList from "./src/TodoList";
import {createStore} from "redux";
let store = createStore(reducer);
let nextTodoID = 0;

class RN_Redux extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      todos: store.getState().todos,
      filter: store.getState().filter,
    };
  
    store.subscribe(()=>{
      this.setState({
        todos: store.getState().todos,
        filter: store.getState().filter,
      });
    });
  }
  
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        todos: store.getState().todos,
        filter: store.getState().filter,
      });
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TodoList todos = {this.state.todos}
                  onAdd = {(text)=>store.dispatch({
                    type:"ADD_TODO",
                    id:nextTodoID++,
                    text: text
                  })}
        />
        
        {/*<CounterBox value = {this.state.value}
                    onIncrement = {()=>store.dispatch({type: "INCREMENT"})}
                    onDecrement = {()=>store.dispatch({type: "DECREMENT"})}
        />*/}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RN_Redux', () => RN_Redux);
