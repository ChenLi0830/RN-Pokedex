/**
 * Created by Chen on 2016-08-26.
 */
import React from 'react';
import {connect} from 'react-redux';
import VisibleTodoList from './VisibleTodoList';

const getVisibleTodos = (todos, filter)=> {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    visibleTodos: getVisibleTodos(
        state.todos,
        state.filter
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    whenToggled: (id) => {
      dispatch({
        type: "TOGGLE_TODO",
        id: id,
      })
    }
  }
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);

export default TodoList;
