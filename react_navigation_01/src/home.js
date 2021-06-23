/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="To User Screen"
        onPress={() => {
          navigation.navigate('User', {
            userIdx: 100,
            userName: 'Gildong',
            userLastName: 'Hong',
          }); // App.js > screen의 이름값
        }}
      />
      <Button
        title="Change the title"
        onPress={() =>
          navigation.setOptions({
            title: 'Changed!!!',
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTintColor: 'red',
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
