import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function DrawerUserScreen({navigation}) {
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
