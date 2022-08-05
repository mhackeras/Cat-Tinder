import React from 'react';
import {Text, View} from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './UserScreen.style';

const UserScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>03</Text>
      </View>
    </Screen>
  );
};

export default UserScreen;
