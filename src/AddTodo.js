/**
 * Created by Chen on 2016-08-28.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';

let nextTodoID = 0;

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }
  
  render() {
    let {store} = this.context;
    
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

AddTodo.contextTypes = {
  store: PropTypes.object
};

let styles = {
  btnStyle: {
    backgroundColor: "lightblue",
    textAlign: "center",
  }
};

export default AddTodo;