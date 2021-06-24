import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function DrawerHomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>DrawerHomeScreen</Text>
      <Button
        title="To User Screen"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}
