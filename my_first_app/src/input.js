/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = () => {
  const [myTextInput, setMyTextInput] = useState('');

  const onChangeInput = e => {
    setMyTextInput(e);
  };

  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.input}
        value={myTextInput}
        onChangeText={onChangeInput}
        multiline={true} // 개행 여부
        maxLength={100} // 글자수 제한
        autoCapitalize={'none'} // 대문자 자동 수정 -> 보통 로그인 이메일 입력시때 사용
        editable={false} // === disable
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#cecece',
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  mainView: {
    width: '100%',
  },
});

export default Input;
