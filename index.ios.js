/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput,TouchableHighlight} from 'react-native';
import reducer from './src/todoApp';
import TodoList from './src/TodoList';
import Footer from './src/Footer';
import {createStore} from 'redux';
let store = createStore(reducer);
let nextTodoID = 0;

class RN_Redux extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  
  componentDidMount(){
    this._unsubscribe = store.subscribe(()=> {
      this.setState(store.getState());
    });
  }
  
  componentWillUnmount(){
    this._unsubscribe();
  }
  
  render() {
    const state = {...store.getState()};
        
    return (
        <View style={styles.container}>
          
          <View>
            <TextInput
                value={this.state.text}
                onChangeText={text=>this.setState({text})}
                style={{height: 40, borderColor: 'gray', width: 150}}
                placeholder="Add new todo task">
            </TextInput>
  
            <TouchableHighlight onPress={()=> {
              store.dispatch({
                type: "ADD_TODO",
                id: nextTodoID++,
                text: this.state.text
              });
              this.setState({text:""});
            }}>
              <Text style={styles.btnStyle}>
                Add
              </Text>
            </TouchableHighlight>
          </View>
          
          <TodoList {...state}
                    whenToggled={(id)=> store.dispatch({
                      type: "TOGGLE_TODO",
                      id: id,
                    })}
          />
  
          <Footer />
          
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
});

AppRegistry.registerComponent('RN_Redux', () => RN_Redux);


export default store;
