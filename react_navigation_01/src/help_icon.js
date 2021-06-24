/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import Help from './assets/pics/help.png';

const HelpTitle = () => {
  return <Image style={{width: 40, height: 40}} source={Help} />;
};

export default HelpTitle;
