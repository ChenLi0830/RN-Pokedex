/**
 * Created by Chen on 2016-08-26.
 */
import FilterLink from './FilterLink';
import {View, Text} from 'react-native';
import React from 'react';

const Footer = () => (
    <View>
      <Text>
        Show:
      </Text>
      
      <FilterLink filter={"SHOW_ALL"}>
        All
      </FilterLink>
      
      <FilterLink filter={"SHOW_ACTIVE"}>
        Active
      </FilterLink>
      
      <FilterLink filter={"SHOW_COMPLETED"}>
        Completed
      </FilterLink>
      
    </View>
);


export default Footer;