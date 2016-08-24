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
import CounterBox from "./src/CounterBox";
import counter from './src/counter';
import {createStore} from "redux";
let store = createStore(counter);
class RN_Redux extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      value:0
    }
  }
  
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({value: store.getState()});
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
        <CounterBox value = {this.state.value}
                    onIncrement = {()=>store.dispatch({type: "INCREMENT"})}
                    onDecrement = {()=>store.dispatch({type: "DECREMENT"})}
        />
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
