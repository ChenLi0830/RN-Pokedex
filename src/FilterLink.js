/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';

const FilterLink = ({text, filter, currentFilter, whenSetFilter}) => {
  if (filter === currentFilter) {
    return (
        <Text style={{fontWeight: "bold"}}>
          {text}
        </Text>
    )
  }
  else {
    return (
        <TouchableHighlight>
          <Text onPress={()=> {
            whenSetFilter(filter)
          }}>
            {text}
          </Text>
        </TouchableHighlight>
    )
  }
};

export default FilterLink;