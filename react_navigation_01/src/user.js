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

const UserScreen = ({navigation, route}) => {
  const {params} = route;
  const userIdx = params ? params.userIdx : null;
  const userName = params ? params.userName : null;
  const userLastName = params ? params.userLastName : null;

  const headerStyle = () => {
    navigation.setOptions({
      title: 'Customizing',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green',
      },
    });
  };
  // headerStyle();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>User Screen</Text>
      <Button
        title="To Home Screen"
        onPress={() => {
          navigation.navigate('Home'); // App.js > screen의 이름값
        }}
      />
      <Text>User Idx: {JSON.stringify(userIdx)} </Text>
      <Text>User Name: {JSON.stringify(userName)} </Text>
      <Text>User LastName: {JSON.stringify(userLastName)} </Text>
    </View>
  );
};

export default UserScreen;
