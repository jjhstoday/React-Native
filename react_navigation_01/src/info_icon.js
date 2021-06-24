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
import Info from './assets/pics/info.png';

const InfoTitle = () => {
  return <Image style={{width: 40, height: 40}} source={Info} />;
};

export default InfoTitle;
