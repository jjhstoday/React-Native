/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Easing, Animated, StyleSheet, View, Button, Text} from 'react-native';

const AnimTwo = () => {
  const [redSquare, setRedSquare] = useState(() => new Animated.Value(1));
  const [greenSquare, setGreenSquare] = useState(
    () => new Animated.ValueXY(0, 0),
  );
  const [blueSquare, setBlueSquare] = useState(
    () => new Animated.ValueXY(0, 0),
  );

  const runAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        // 동시에 실행 설정
        Animated.timing(redSquare, {
          toValue: 0,
        }),
        Animated.spring(greenSquare, {
          toValue: {x: 200, y: 0},
        }),
        Animated.spring(blueSquare, {
          toValue: {x: 200, y: 400},
        }),
      ]),
    ]).start();
  };

  return (
    <View>
      <Animated.View
        style={{
          opacity: redSquare,
        }}>
        <View style={styles.redSquare} />
      </Animated.View>

      <Animated.View style={greenSquare.getLayout()}>
        <View style={styles.greenSquare} />
      </Animated.View>

      <Animated.View style={blueSquare.getLayout()}>
        <View style={styles.blueSquare} />
      </Animated.View>
      <Button title="Animation Start" onPress={runAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  redSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  greenSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  blueSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default AnimTwo;
