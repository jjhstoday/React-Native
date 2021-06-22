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
} from 'react-native';

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
      <PickerComponent />
      <TextInput
        style={styles.input}
        value={myTextInput}
        onChangeText={onChangeInput}
        multiline={true} // 개행 여부
        maxLength={100} // 글자수 제한
        autoCapitalize={'none'} // 대문자 자동 수정 -> 보통 로그인 이메일 입력시때 사용
        editable={true} // === disable
      />
      <Button title="Add Text Input" onPress={onAddTextInput} />
      <ScrollView style={{width: '100%'}}>
        {alphabet.map((item, idx) => (
          <Text style={styles.mainText} key={idx}>
            {item}
          </Text>
        ))}
      </ScrollView>
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
});

export default App;
