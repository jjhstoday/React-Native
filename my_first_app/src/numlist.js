/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NumList = ({num}) => {
  return num.map((n, i) => (
    <View style={styles.numList} key={i}>
      <Text>{n}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
