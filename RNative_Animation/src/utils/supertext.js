/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Supertext = ({children, style}) => {
  console.log('####', style);
  return <Text style={[styles.supertext, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  supertext: {
    backgroundColor: 'skyblue',
    fontSize: 25,
    color: 'blue',
    padding: 15,
    width: 300,
  },
});

export default Supertext;
