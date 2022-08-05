import {StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

export default StyleSheet.create({
  container: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    elevation: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
});
