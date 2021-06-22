/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

const App = () => {
  const [appName, setAppName] = useState('My First App');
  const [random, setRandom] = useState([36, 999]);

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandom(prev => [...prev, randomNum]);
  };

  const onNumDelete = position => {
    const newArray = random.filter((_, i) => position !== i);
    setRandom(newArray);
  };

  return (
    <View style={styles.mainView}>
      {/* <Header name={appName} />
      <View>
        <Text style={styles.mainText} onPress={() => alert('text touch event')}>
          Hello World
        </Text>
      </View>
      <Generator add={onAddRandomNum} />
      <ScrollView
        style={{width: '100%'}}
        // onMomentumScrollBegin={() => alert('begin')}
        // onMomentumScrollEnd={() => alert('begin')}
        // onScroll={() => alert('begin')}
        // onContentSizeChange={(width, height) => alert(height)}
        bounces={false}>
        <NumList num={random} delete={onNumDelete} />
      </ScrollView> */}
      <Input />
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
  },
});

export default App;
