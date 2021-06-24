import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default function TabHomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Home Stack Screen"
        onPress={() => navigation.navigate('Home_Stack')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
