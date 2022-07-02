import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');

export const images = {
  logo_light: require('./images/logo-light.png'),
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
