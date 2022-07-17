import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

type Props = {
  container: ViewStyle;
  image: ImageStyle;
  image_product: ImageStyle;
  name: TextStyle;
  content: TextStyle;
  wrap_content: ViewStyle;
  wrap_price_quatity: ViewStyle;
  price: TextStyle;
  flex: ViewStyle;
  btn_augment: TouchableOpacityProps;
  number: TextStyle;
  wrap_btn: ViewStyle;
  btn_add_cart: TouchableOpacityProps;
  btn_favorites: TouchableOpacityProps;
  text_btn: TextStyle;
  content_top: ViewStyle;
  btn_back: TouchableOpacityProps;
  wrap_star: ViewStyle;
  number_star: TextStyle;
  label_review: ViewStyle;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btn_back: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    position: 'absolute',
    width: 40,
    height: 40,
    top: 75,
    left: '11%',
    zIndex: 99,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 1.84,
    elevation: 1,
  },
  wrap_content: {
    flex: 4,
    padding: 25,
  },
  image_product: {
    height: '100%',
    width: '85%',
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 60,
  },
  name: {
    fontSize: 24,
    color: '#303030',
    fontWeight: '700',
  },
  content: {
    fontSize: 14,
    lineHeight: 19,
    color: '#606060',
  },
  wrap_price_quatity: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: '#303030',
    fontWeight: '700',
    fontSize: 30,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
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
  content_top: {
    flex: 0.8,
  },
  wrap_btn: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  btn_add_cart: {
    backgroundColor: '#242424',
    paddingVertical: 15,
    borderRadius: 8,
    flex: 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_favorites: {
    backgroundColor: '#F0F0F0',
    width: 60,
    height: 60,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_btn: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  wrap_star: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  number_star: {
    fontSize: 18,
    color: '#303030',
    fontWeight: '700',
    marginHorizontal: 12,
  },
  label_review: {
    fontWeight: '600',
    color: '#808080',
    marginLeft: 8,
  },
});
