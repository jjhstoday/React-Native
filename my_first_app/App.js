/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import PickerComponent from './src/picker';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Dogs from './assets/images/dogs.jpg';
import ModalComponent from './src/modal';

const App = () => {
  const [myTextInput, setMyTextInput] = useState('dd');
  const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd']);

  const onChangeInput = e => {
    setMyTextInput(e);
  };

  const onAddTextInput = () => {
    setAlphabet(prev => [...prev, myTextInput]);
    setMyTextInput('');
  };

  return (
    <View style={styles.mainView}>
      <ModalComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    backgroundColor: '#cecece',
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  image: {
    backgroundColor: 'orange',
    width: '100%',
    height: 700,
  },
});

export default App;
