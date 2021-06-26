/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
// import AnimOne from './src/Animation01';
// import AnimTwo from './src/Animation02';
import Supertext from './src/utils/supertext';

const App = () => {
  const checkSupport = () => {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 13.4) {
        return false;
      } else {
        if (Platform.Version < 27) {
          return false;
        }
      }
    }
    return true;
  };

  console.warn(Platform.Version);
  return (
    <View style={styles.container}>
      {checkSupport() ? (
        <Supertext style={styles.div}>
          {/* This is my template!! */}
          {Platform === 'ios'
            ? 'This is my iOS Phone'
            : 'This is my Android Phone'}
        </Supertext>
      ) : (
        <Text>Sorry. Your phone is not being supported by the app.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'green',
      },
    }),
  },
});

export default App;
