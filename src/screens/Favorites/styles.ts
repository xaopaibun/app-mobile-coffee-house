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
  subTitle: TextStyle;
  item: ViewStyle;
  imageProduct: ImageStyle;
  name: TextStyle;
  price: TextStyle;
  imageView: ViewStyle;
  containerView: ViewStyle;
  info: ViewStyle;
  func: TextStyle;
  shopping_bag: TouchableOpacityProps;
  btnAdd: TouchableOpacityProps;
  textBtn: TextStyle;
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
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#B3B3B3',
  },
  name: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 12,
  },
  price: {
    fontSize: 14,
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
    flex: 0.85,
  },
  func: {
    flex: 0.15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shopping_bag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    width: 34,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAdd: {
    backgroundColor: '#242424',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    margin: 20,
  },
  textBtn: {
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
