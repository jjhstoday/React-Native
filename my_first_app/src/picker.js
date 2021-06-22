/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const PickerComponent = () => {
  const [country, setCountry] = useState('korea');

  return (
    <View style={styles.container}>
      <Picker
        style={{height: 50, width: 250}}
        selectedValue={country}
        onValueChange={(val, idx) => setCountry(val)}>
        <Picker.Item label="Korea" value="korea" />
        <Picker.Item label="Canada" value="canada" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
});

export default PickerComponent;
