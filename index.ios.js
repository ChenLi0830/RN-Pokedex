/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import reducer from './src/todoApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import TodoList from './src/TodoList';
import Footer from './src/Footer';
import AddTodo from './src/AddTodo';

class RN_Redux extends Component {
  render() {
    return (
        <Provider store = {createStore(reducer)}>
          <View style={styles.container}>
            
            <AddTodo />
            
            <TodoList />
            
            <Footer />
          
          </View>
        </Provider>
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
});

AppRegistry.registerComponent('RN_Redux', () => RN_Redux);

