/**
 * Created by Chen on 2016-08-28.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import store from '../index.ios';

let nextTodoID = 0;

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }
  
  render() {
    return <View>
      <TextInput
          value={this.state.text}
          onChangeText={(text) =>
              this.setState({text})
          }
          style={{height: 40, borderColor: 'gray', width: 150}}
          placeholder="Add new todo task">
      </TextInput>
      
      <TouchableHighlight onPress={()=> {
        store.dispatch({
          type: "ADD_TODO",
          id: nextTodoID++,
          text: this.state.text
        });
        this.setState({text: ""});
      }}>
        <Text style={styles.btnStyle}>
          Add
        </Text>
      </TouchableHighlight>
    </View>
  }
}

let styles = {
  btnStyle: {
    backgroundColor: "lightblue",
    textAlign: "center",
  }
};

AddTodo.propTypes = {
  text: PropTypes.string,
  whenChangeText: PropTypes.func
};

export default AddTodo;