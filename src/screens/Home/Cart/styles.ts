import {
  ImageStyle,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  subTitle: TextStyle;
  item: ViewStyle;
  imageProduct: ImageStyle;
  name: TextStyle;
  price: TextStyle;
  imageView: ViewStyle;
  containerView: ViewStyle;
  info: ViewStyle;
  func: TextStyle;
  btn: TouchableOpacityProps;
  textBtn: TextStyle;
  flex: ViewStyle;
  btn_augment: TouchableOpacityProps;
  number: TextStyle;
  text_total: TextStyle;
  total: TextStyle;
  flex_total: ViewStyle;
  promo: ViewStyle;
  promo_code: TextInputProps;
  btnNext: TouchableOpacityProps;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#B3B3B3',
  },
  name: {
    fontSize: 15,
    color: '#606060',
    marginVertical: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#303030',
  },
  imageView: {
    width: 100,
    height: 100,
  },
  imageProduct: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  info: {
    marginHorizontal: 20,
    flex: 1,
  },
  func: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#242424',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textBtn: {
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  btn_augment: {
    backgroundColor: '#E0E0E0',
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  number: {
    fontWeight: '700',
    fontSize: 18,
    color: '#242424',
    marginHorizontal: 16,
  },
  text_total: {
    color: '#808080',
    fontSize: 20,
    fontWeight: '700',
  },
  total: {
    color: '#303030',
    fontSize: 20,
    fontWeight: '700',
  },
  flex_total: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 40,
  },
  promo: {
    backgroundColor: '#ffffff',
    height: 44,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 5,
  },
  promo_code: {
    paddingHorizontal: 20,
  },
  btnNext: {
    backgroundColor: '#303030',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 44,
  },
});
