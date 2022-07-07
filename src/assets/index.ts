import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');

export const images = {
  cart: require('./images/cart.png'),
  search: require('./images/search.png'),
  star: require('./images/star.png'),
  sofa: require('./images/sofa.png'),
  chair: require('./images/chair.png'),
  bell: require('./images/bell.png'),
  bell_active: require('./images/bell_active.png'),
  product1: require('./images/product1.png'),
  product2: require('./images/product2.png'),
  product3: require('./images/product3.png'),
  product4: require('./images/product4.png'),
  shopping_bag: require('./images/shopping_bag.png'),
  table: require('./images/table.png'),
  bed: require('./images/bed.png'),
  bi_person: require('./images/bi_person.png'),
  bi_person_active: require('./images/bi_person_active.png'),
  clarity_home_solid: require('./images/clarity_home-solid.png'),
  clarity_home_solid_active: require('./images/clarity_home_solid_active.png'),
  marker: require('./images/marker.png'),
  marker_active: require('./images/marker_active.png'),
  delete: require('./images/delete.png'),
  shopping_bag_active: require('./images/shopping_bag_active.png'),
  icon_login: require('./images/icon_login.png'),
};

export const colors = {
  primary: '#00DAFF',
  borderPrimary: '#00DAFF',
  gray: '#9a9da0',
  borderGray: '#E1E1E1',
  danger: '#FF0000',
  white: '#FFFFFF',
};

// based on iphone 5s's scale
const scale = width / 320;

const normalize = (size: number): number => {
  const newSize = size * scale;
  return Platform.OS === 'ios'
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const fontSizes = {
  mini: normalize(10),
  small: normalize(11),
  medium: normalize(13),
  large: normalize(15),
  xlarge: normalize(22),
  custom: normalize,
};

export const fontFamily = Platform.select({
  ios: {
    normal: 'Hiragino Sans',
    w3: 'HiraginoSans-W3',
    w6: 'HiraginoSans-W6',
  },
  android: {
    normal: 'normal',
    w3: 'normal',
    w6: 'normal',
  },
});
