import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Logo from './assets/pics/home.png';
import {CommonActions, NavigationContainer} from '@react-navigation/native';

export default function SlideDrawer({navigation}) {
  const navigateToScreen = route => () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image source={Logo} style={{width: 40, height: 40}} />
          </View>
          <Text style={styles.sectionHeading}>Section 1</Text>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('Home')}>
              Home
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('User')}>
              User
            </Text>
            <Text style={styles.navItemStyle} onPress={() => alert('Help')}>
              Help
            </Text>
            <Text style={styles.navItemStyle} onPress={() => alert('Help')}>
              Info
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingLeft: 10, paddingBottom: 30}}>
        <Text>Copyright @ Wintho, 2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionHeading: {
    color: '#fff',
    backgroundColor: '#ef8e44',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
});
