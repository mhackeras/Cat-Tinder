import React from 'react';
import {Text, View} from 'react-native';
import Screen from '../../components/Screen/Screen';
import styles from './MessagesScreen.style';

const MessagesScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>02</Text>
      </View>
    </Screen>
  );
};

export default MessagesScreen;
