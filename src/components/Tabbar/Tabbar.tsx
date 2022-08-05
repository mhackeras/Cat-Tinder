import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './Tabbar.style';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tabbar = ({state, navigation}: BottomTabBarProps) => {
  const getIcon = (index: number, focused: boolean) => {
    if (index === 0) {
      return focused
        ? require('../../res/pngs/navigation/catActive.png')
        : require('../../res/pngs/navigation/cat.png');
    } else if (index === 1) {
      return focused
        ? require('../../res/pngs/navigation/messageActive.png')
        : require('../../res/pngs/navigation/message.png');
    } else {
      return focused
        ? require('../../res/pngs/navigation/userActive.png')
        : require('../../res/pngs/navigation/user.png');
    }
  };

  return (
    <SafeAreaView style={styles.bottomView}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const icon = getIcon(index, isFocused);
          const buttonStyle = Object.assign(
            {},
            styles.button,
            index > 0 && styles.buttonMargin,
          );

          const onPress = () => {
            navigation.navigate(route.name);
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={buttonStyle}>
              <Image style={styles.image} source={icon} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Tabbar;
