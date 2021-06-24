import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function TabHomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
