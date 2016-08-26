/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput, StyleSheet} from 'react-native';
import FilterLink from "./FilterLink";

const getVisibleTodos = (todos, filter)=>{
  switch(filter){
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
  }
};

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }
  
  render() {
    let visibleTodos = getVisibleTodos(this.props.todos, this.props.filter);
    let list = visibleTodos.map(todo=>
        <Text key={todo.id}
              onPress={()=> {
                this.props.whenToggled(todo.id)
              }}
              style={[styles.textBase, todo.completed && styles.textDeleted]}
        >
          {todo.text}
        </Text>
    );
    
    return <View>
      <View>
        <TextInput
            value={this.state.text}
            onChangeText={text=>this.setState({text})}
            style={{height: 40, borderColor: 'gray', width: 150}}
            placeholder="Add new todo task">
        </TextInput>
      </View>
      
      <View>
        <TouchableHighlight onPress={()=> {
          this.setState({text: ""});
          this.props.whenAddNew(this.state.text);
        }}>
          <Text style={styles.btnStyle}>
            Add
          </Text>
        </TouchableHighlight>
        {list}
      </View>
      
      <View>
        <Text>
          Show:
        </Text>
        <FilterLink text = "All"
                    currentFilter = {this.props.filter}
                    filter = {"SHOW_ALL"}
                    whenSetFilter = {(filter)=>this.props.whenSetFilter(filter)}/>
        <FilterLink text = "Active"
                    currentFilter = {this.props.filter}
                    filter = {"SHOW_ACTIVE"}
                    whenSetFilter = {(filter)=>this.props.whenSetFilter(filter)}/>
        <FilterLink text = "Completed"
                    currentFilter = {this.props.filter}
                    filter = {"SHOW_COMPLETED"}
                    whenSetFilter = {(filter)=>this.props.whenSetFilter(filter)}/>
      </View>
    
    </View>
  }
}

let styles = StyleSheet.create({
  textBase: {
    fontSize: 12,
    color: "#333"
  },
  textDeleted: {
    color: "red",
    textDecorationLine: "line-through"
  },
  btnStyle: {
    backgroundColor: "lightblue",
    textAlign: "center",
  }
});