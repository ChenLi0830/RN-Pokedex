/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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

const Todo = ({id, completed, text, whenToggled}) => (
    <Text onPress={()=> whenToggled(id)}
          style={[styles.textBase, completed && styles.textDeleted]}>
      {text}
    </Text>
);

const TodoList = ({todos, filter, whenToggled}) => {
    let visibleTodos = getVisibleTodos(todos, filter);
    
    return <View>
      {visibleTodos.map(todo=>
          <Todo key={todo.id}
                {...todo}
                whenToggled = {whenToggled}
          />
        )}
    </View>
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

export default TodoList;