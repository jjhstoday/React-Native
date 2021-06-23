/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';

const Stack = createStackNavigator();

const App = () => {
  // const LogoTitle = () => {
  //   return (
  //     <Image
  //       style={{width: 40, height: 40}}
  //       source={require('./src/assets/pics/home.png')}
  //     />
  //   );
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#aaaaaa',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#a22390',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerTitle: <LogoTitle />,
          }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          initialParams={{
            userIdx: 50,
            userName: 'Gildong',
            userLastName: 'Go',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
