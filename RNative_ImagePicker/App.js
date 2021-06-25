/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  let [avatar, setAvatar] = useState('');

  const addImage = () => {
    ImagePicker.launchCamera({}, response => {
      setAvatar(response.uri);
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <Button title="Add an Image" onPree={() => addImage()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
