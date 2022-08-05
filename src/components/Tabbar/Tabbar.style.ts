import {StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

export default StyleSheet.create({
  bottomView: {
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  container: {
    width: 156,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13.62,
    paddingHorizontal: 24,
    borderRadius: 36,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    elevation: 16,
  },
  button: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMargin: {
    marginLeft: 26.5,
  },
  image: {
    width: 20,
    height: 20,
  },
});
