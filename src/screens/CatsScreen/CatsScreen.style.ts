import {StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  swiperContainer: {
    height: '80%',
  },
  swiper: {
    height: '100%',
    backgroundColor: colors.background,
  },
  swiperCard: {
    height: '80%',
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    elevation: 16,
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 58,
    marginBottom: 60,
  },
  xButton: {
    marginRight: 24,
  },
  heartButton: {
    marginLeft: 24,
  },
});
