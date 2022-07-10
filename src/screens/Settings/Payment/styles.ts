import {
  ImageBackgroundProps,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  subTitle: TextStyle;
  containerView: ViewStyle;
  button: ViewStyle;
  textButton: TextStyle;
  footerView: ViewStyle;
  backgroundImage: ImageBackgroundProps;
  numberCard: TextStyle;
  checkboxContainer: ViewStyle;
  labelCheckbox: TextStyle;
  labelCard: TextStyle;
  value: TextStyle;
  flex: ViewStyle;
  imageCard: ImageStyle;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  containerView: {
    paddingHorizontal: 20,
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
  footerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textButton: {
    fontSize: 24,
    fontWeight: '600',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  numberCard: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  labelCheckbox: {
    fontSize: 18,
    color: '#242424',
    marginLeft: 10,
  },
  labelCard: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.8,
  },
  value: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  flex: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageCard: {
    marginLeft: 50,
  },
});
