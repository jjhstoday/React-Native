/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Easing, Animated, StyleSheet, View, Button, Text} from 'react-native';

const AnimOne = () => {
  const [mySquare, setMySquare] = useState(() => new Animated.Value(1));

  const runAnimation = () => {
    Animated.timing(mySquare, {
      toValue: 0,
      duration: 2000,
      delay: 1500,
    }).start();
  };

  return (
    <View>
      <Animated.View
        // style={mySquare.getLayout()}
        style={{
          opacity: mySquare,
          transform: [
            {
              rotateX: mySquare.interpolate({
                inputRange: [0, 0.5, 1], // inputRange는 작은 값부터 넣어준다.
                outputRange: ['0deg', '180deg', '360deg'], // inputRagne의 인덱스와 대응되어야 한다.
              }),
            },
            {
              translateX: mySquare.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [300, 150, 0],
              }),
            },
          ],
          // top: mySquare.interpolate({
          //   inputRange: [0, 1], // inputRange는 작은 값부터 넣어준다.
          //   outputRange: [700, 0], // inputRagne의 인덱스와 대응되어야 한다.
          // }),
        }}>
        <View style={styles.square} />
      </Animated.View>
      <Animated.Text
        style={{
          fontSize: mySquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [40, 30, 20],
          }),
          color: mySquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['red', 'green', 'blue'],
          }),
        }}>
        <Text>Animation Effects</Text>
      </Animated.Text>
      <Button title="Animation Start" onPress={runAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default AnimOne;
