import {StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

export default StyleSheet.create({
  card: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  info: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  breed: {
    color: colors.black,
  },
  origin: {
    marginTop: 2,
    color: colors.grey,
  },
});
