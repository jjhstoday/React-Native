import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text, Button, Image} from 'react-native';
import PictogramUser from '../src/assets/pics/user.png';

export default function DrawerUserScreen({navigation}) {
  drawerStyle = () => {
    navigation.setOptions({
      drawerIcon: () => (
        <Image source={PictogramUser} style={{width: 40, height: 40}} />
      ),
    });
  };

  drawerStyle();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>DrawerUserScreen</Text>
      <Button
        title="To Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
