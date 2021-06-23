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
import Logo from './assets/pics/home.png';

const LogoTitle = () => {
  return <Image style={{width: 40, height: 40}} source={Logo} />;
};

export default LogoTitle;
