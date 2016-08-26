/**
 * Created by Chen on 2016-08-24.
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class CounterBox extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
    <View>
      <Text style = {styles.text}>
        hello from Counter box! The value is {this.props.value}
      </Text>
  
      <TouchableHighlight
          style={styles.button}
          onPress={this.props.onIncrement}>
        <View>
          <Text style={styles.buttonText}>Increment</Text>
        </View>
      </TouchableHighlight>
  
      <TouchableHighlight
          style={styles.button}
          onPress={this.props.onDecrement}>
        <View>
          <Text style={styles.buttonText}>Decrement</Text>
        </View>
      </TouchableHighlight>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color:"red",
    fontSize:20
  }
});