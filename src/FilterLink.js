/**
 * Created by Chen on 2016-08-26.
 */
import React, {Component} from "react";
import {TouchableHighlight, Text} from "react-native";
export default class FilterLink extends Component{
  render(){
    return <TouchableHighlight>
      <Text onPress = {()=>{this.props.whenSetFilter()}}>
        {this.props.text}
      </Text>
    </TouchableHighlight>
  }
};