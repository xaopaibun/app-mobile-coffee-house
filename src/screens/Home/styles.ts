import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  icon: ImageStyle;
  selected: TouchableOpacityProps;
  item: ViewStyle;
  itemProduct: ViewStyle;
  viewSelect: ViewStyle;
  imageProduct: ImageStyle;
  iconShopping: ImageStyle;
  name: TextStyle;
  price: TextStyle;
  shopping: TouchableOpacityProps;
  imageView: ViewStyle;
  textLabel: TextStyle;
  containerView: ViewStyle;
  btnOutline: ViewStyle;
  textBtnOutline: TextStyle;
  btn: ViewStyle;
  textBtn: TextStyle;
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
  title: {
    fontSize: fontSizes.custom(16),
    lineHeight: 25,
    textAlign: 'center',
    color: '#909090',
  },
  subTitle: {
    fontSize: fontSizes.custom(18),
    color: '#242424',
    fontWeight: '700',
  },
  icon: {
    height: 24,
    width: 24,
  },
  viewSelect: {
    height: 'auto',
    marginVertical: 16,
  },
  selected: {
    height: 44,
    width: 44,
    backgroundColor: '#CACCCE',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12.5,
  },
  item: {
    height: 80,
    width: 60,
    marginHorizontal: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemProduct: {
    position: 'relative',
    flex: 0.5,
    margin: 5,
  },
  imageProduct: {
    width: '100%',
    height: 230,
    borderRadius: 10,
  },
  iconShopping: {
    width: 20,
    height: 20,
  },
  name: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#303030',
  },
  shopping: {
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: 'rgba(96, 96, 96, 0.4)',
    borderRadius: 6,
    bottom: 10,
    right: 10,
    zIndex: 999,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    position: 'relative',
    width: 'auto',
  },
  textLabel: {
    fontSize: 14,
    color: '#999999',
  },
  btnOutline: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textBtnOutline: {
    color: '#303030',
    fontSize: 14,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#242424',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textBtn: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
