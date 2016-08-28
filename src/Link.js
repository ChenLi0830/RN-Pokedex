/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';

const Link = ({active, whenSetFilter, children}) => {
  if (active) {
    return (
        <Text style={{fontWeight: "bold"}}>
          {children}
        </Text>
    )
  }
  else {
    return (
        <TouchableHighlight>
          <Text onPress={()=> {
            whenSetFilter()
          }}>
            {children}
          </Text>
        </TouchableHighlight>
    )
  }
};

export default Link;