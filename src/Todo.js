/**
 * Created by Chen on 2016-08-29.
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Todo = ({id, completed, text, whenToggled}) => (
    <Text onPress={()=> whenToggled(id)}
          style={[styles.textBase, completed && styles.textDeleted]}>
      {text}
    </Text>
);

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


export default Todo;
