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
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/assets/user_tab';
import TabMessageScreen from './src/message_tab';
import {Ionicons} from 'react-native-vector-icons/dist/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: 'skyblue',
        activeTintColor: 'blue',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#c6cbef',
        },
        labelPosition: 'beside-icon',
      }}
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}>
      <Tab.Screen name="Home" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
      <Tab.Screen name="Message" component={TabMessageScreen} />
    </Tab.Navigator>
  );
};

const DrawerComponent = () => {
  return (
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
      <Drawer.Screen name="Route" component={TabComponent} />
    </Drawer.Navigator>
  );
};

const TabBarIcon = (focused, name) => {
  console.log('############################', Ionicons);
  // let iconImagePath;
  let iconName, iconSize;

  if (name === 'Home') {
    iconName = 'home-outline';
    // iconImagePath = require('./src/assets/pics/home.png');
  } else if (name === 'User') {
    iconName = 'people-outline';
    // iconImagePath = require('./src/assets/pics/user.png');
  } else if (name === 'Message') {
    iconName = 'mail-outline';
    // iconImagePath = require('./src/assets/pics/message.png');
  }
  iconSize = focused ? 30 : 20;

  // return <Ionicons name={iconName} size={iconSize} />;
};

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

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', paddingRight: 15}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer);
        }}>
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  );
};

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
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={DrawerComponent}
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen name="Home_Stack" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Home"
    //     tabBarOptions={{
    //       activeBackgroundColor: 'skyblue',
    //       activeTintColor: 'blue',
    //       inactiveTintColor: '#fff',
    //       style: {
    //         backgroundColor: '#c6cbef',
    //       },
    //       labelPosition: 'beside-icon',
    //     }}
    //     screenOptions={({route}) => ({
    //       tabBarLabel: route.name,
    //       tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
    //     })}>
    //     <Tab.Screen name="Home" component={TabHomeScreen} />
    //     <Tab.Screen name="User" component={TabUserScreen} />
    //     <Tab.Screen name="Message" component={TabMessageScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName="Home"
    //     drawerType="front"
    //     drawerPosition="right"
    //     drawerStyle={{
    //       backgroundColor: '#c6cbef',
    //       width: 200,
    //     }}
    //     drawerContentOptions={{
    //       activeTintColor: '#8700ff',
    //       activeBackgroundColor: 'skyblue',
    //     }}
    //     drawerContent={props => <SlideDrawer {...props} />}>
    //     <Drawer.Screen
    //       name="Home"
    //       component={DrawerHomeScreen}
    //       options={{
    //         drawerIcon: () => (
    //           <Image source={PictogramHome} style={{width: 40, height: 40}} />
    //         ),
    //       }}
    //     />
    //     <Drawer.Screen name="User" component={DrawerUserScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

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
