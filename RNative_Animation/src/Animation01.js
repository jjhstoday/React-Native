/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Easing, Animated, StyleSheet, View, Button} from 'react-native';

const AnimOne = () => {
  const [mySquare, setMySquare] = useState(() => new Animated.ValueXY(0, 0));

  useEffect(() => {
    Animated.timing(mySquare, {
      toValue: {x: 50, y: 300},
      duration: 2000,
      delay: 1500,
      easing: Easing.elastic(3),
    }).start();
  }, []);

  return (
    <Animated.View
      style={mySquare.getLayout()}
      // style={{
      //   left: mySquare.x,
      //   top: mySquare.y,
      // }}
    >
      <View style={styles.square} />
    </Animated.View>
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
