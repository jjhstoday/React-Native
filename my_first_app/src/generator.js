/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = ({add}) => {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => add()} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#56cdea',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
