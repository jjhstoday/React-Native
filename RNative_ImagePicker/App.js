/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker/src';

const App = () => {
  let [avatar, setAvatar] = useState('');

  const addImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Choose your photo',
        takePhotoButtonTitle: 'Take a pretty one',
        chooseFromLibraryButtonTitle: 'Select an old one',
        cancelButtonTitle: 'Just go back',
      },
      response => {
        setAvatar(response.uri);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <Button title="Add an Image" onPress={() => addImage()} />
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
