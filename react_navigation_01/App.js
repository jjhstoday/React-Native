/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Image, Button, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import LogoTitle from './src/logo_icon';
import HelpTitle from './src/help_icon';
import PictogramHome from './src/assets/pics/home.png';
import InfoTitle from './src/info_icon';
import SlideDrawer from './src/my_drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const CustomDrawerContent = props => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('http://www.google.com')}
//         icon={() => <HelpTitle />}
//       />
//       <DrawerItem
//         label="Info"
//         onPress={() => alert('Info Window')}
//         icon={() => <InfoTitle />}
//       />
//     </DrawerContentScrollView>
//   );
// };

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
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="front"
        drawerPosition="right"
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 200,
        }}
        drawerContentOptions={{
          activeTintColor: '#8700ff',
          activeBackgroundColor: 'skyblue',
        }}
        drawerContent={props => <SlideDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={DrawerHomeScreen}
          options={{
            drawerIcon: () => (
              <Image source={PictogramHome} style={{width: 40, height: 40}} />
            ),
          }}
        />
        <Drawer.Screen name="User" component={DrawerUserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: '#aaaaaa',
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //         color: '#a22390',
    //       },
    //     }}>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         title: 'Home Screen',
    //         headerTitle: <LogoTitle />,
    //         headerRight: () => (
    //           <Button
    //             title="Info"
    //             onPress={() => alert('I am a button!!!')}
    //             color="orange"
    //           />
    //         ),
    //       }}
    //     />
    //     <Stack.Screen
    //       name="User"
    //       component={UserScreen}
    //       initialParams={{
    //         userIdx: 50,
    //         userName: 'Gildong',
    //         userLastName: 'Go',
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
