/**
 * Created by Chen on 2016-08-29.
 */
import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const VisibleTodoList = ({visibleTodos, whenToggled}) => {
  return <View>{
    visibleTodos.map(todo =>
        <Todo id={todo.id}
              key={todo.id}
              completed={todo.completed}
              text={todo.text}
              whenToggled={()=>whenToggled(todo.id)}
        />
    )
  }
  </View>
};

export default VisibleTodoList;