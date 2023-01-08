import {StyleSheet} from 'react-native';
import {fontSizes} from 'assets';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    paddingHorizontal: 20,
  },
  btnBack: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 9,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: fontSizes.custom(18),
    color: '#242424',
    fontWeight: '700',
  },
});
