/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Todo = ({id, completed, text, whenToggled}) => (
    <Text onPress={()=> whenToggled(id)}
          style={[styles.textBase, completed && styles.textDeleted]}>
      {text}
    </Text>
);

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

class TodoList extends Component {
  componentWillMount() {
    const {store} = this.context;
    this._unsubscribe = store.subscribe(()=>
      this.forceUpdate()
    );
  }
  
  componentWillUnmount() {
    this._unsubscribe();
  }
  
  render() {
    let {store} = this.context,
        state = store.getState(),
        visibleTodos = getVisibleTodos(state.todos, state.filter);
    
    return <View>
      {visibleTodos.map(todo=>
          <Todo key={todo.id}
                {...todo}
                whenToggled={()=>
                    store.dispatch({
                      type: "TOGGLE_TODO",
                      id: todo.id,
                    })
                }
          />
      )}
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
});

TodoList.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  whenToggled: PropTypes.func,
};

TodoList.contextTypes = {
  store: PropTypes.object
};

export default TodoList;




