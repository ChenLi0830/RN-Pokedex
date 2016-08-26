/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: "pick up newspaper"};
  }
  
  render() {
    let list = this.props.todos.map(todo=>
        <Text key={todo.id}>
          {todo.text}
        </Text>
    );
    
    return <View>
      <View>
        <TextInput
            onChangeText={text=>this.setState({text})}
            style={{height: 40, borderColor: 'gray', width: 150, fontSize: 13}}
            placeholder="Pick up newspaper">
        </TextInput>
      </View>
      <View>
        <TouchableHighlight onPress={()=> {
          this.props.onAdd(this.state.text);
        }}>
          <Text style = {styles.btnStyle}>
            Add
          </Text>
        </TouchableHighlight>
        {list}
      </View>
    </View>
  }
}

let styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "lightblue",
    textAlign: "center",
  }
});