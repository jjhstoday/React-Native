/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {View, Text, Button, Modal} from 'react-native';

const ModalComponent = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <View style={{width: '100%'}}>
      <Button title="Open Modal" onPress={handleModal} />
      <Modal
        visible={modal}
        animationType={'slide'}
        onShow={() => alert('Warning!!!')}>
        <View style={{marginTop: 60, backgroundColor: 'red'}}>
          <Text>This is modal content</Text>
        </View>
        <Button title="Go Back" onPress={handleModal} />
      </Modal>
    </View>
  );
};

export default ModalComponent;
