import React from 'react';
import {Image, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './VoteButton.style';

interface Props {
  variant: 'heart' | 'x';
  onPress: () => void;
  customStyle?: ViewStyle;
}

const VoteButton = ({variant, onPress, customStyle}: Props) => {
  const icon =
    variant === 'heart'
      ? require('../../res/pngs/vote/heart.png')
      : require('../../res/pngs/vote/x.png');
  const finalStyle = Object.assign({}, styles.container, customStyle);

  return (
    <TouchableOpacity style={finalStyle} onPress={onPress}>
      <Image source={icon} style={styles.image} />
    </TouchableOpacity>
  );
};

export default VoteButton;
