/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import Contacts from 'react-native-contacts';

const App = () => {
  const [myContacts, setMyContacts] = useState([]);

  const requestContactPermission = async () => {
    if (Platform.OS === 'ios') {
      console.warn('iOS');
      return true;
    } else {
      console.warn('Android');

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);

      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const getContacts = () => {
    requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll((err, contacts) => {
          if (err) {
            throw err;
          }
          setMyContacts(contacts);
        });
      } else {
        alert('no permission');
      }
    });
  };

  const addContacts = () => {
    requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          emailAddress: [
            {
              label: 'work',
              email: 'aaa@example.com',
            },
          ],
          familyName: 'Go',
          givenName: 'Gildong',
          phoneNumbers: [
            {
              label: 'mobile',
              number: '(010) 1111-1111',
            },
          ],
        };

        Contacts.addContact(newContact, err => {
          if (err) {
            throw err;
          }
          setMyContacts(prev => [...prev, newContact]);
        });
      } else {
        alert('no permission');
      }
    });
  };

  return (
    <View style={styles.container}>
      {myContacts.map((item, idx) => (
        <Text key={idx}>
          {item.givenName}
          {item.familyName}
        </Text>
      ))}
      <Button title="Load Contacts" onPress={() => getContacts()} />
      <Button title="Add Contacts" onPress={() => addContacts()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26',
  },
});

export default App;
