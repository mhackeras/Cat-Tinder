import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Screen.style';

interface Props {
  children: React.ReactNode;
}

const Screen = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
