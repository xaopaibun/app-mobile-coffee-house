import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, fontFamily, fontSizes} from 'assets';

type StyleProps = {
  container: ViewStyle;
  containerHasError: ViewStyle;
  label: TextStyle;
  required: TextStyle;
  multiline: TextStyle;
  inline: TextStyle;
  default: ViewStyle;
  error: TextStyle;
};

export default StyleSheet.create<StyleProps>({
  container: {
    marginBottom: 24,
  },
  containerHasError: {
    marginBottom: 0,
  },
  default: {
    width: '100%',
    borderRadius: 4,
    fontSize: fontSizes.small,
    padding: 14,
    overflow: 'hidden',
    borderColor: colors.borderGray,
    borderWidth: 1,
    fontFamily: fontFamily?.w3,
    fontWeight: '300',
  },
  multiline: {
    minHeight: 48,
  },
  inline: {
    height: 48,
  },
  error: {
    height: 24,
    color: 'red',
    justifyContent: 'flex-start',
    fontFamily: fontFamily?.w3,
    fontWeight: '300',
  },
  label: {
    width: '100%',
    fontSize: fontSizes.small,
    marginBottom: 4,
    fontFamily: fontFamily?.w3,
    fontWeight: '300',
  },
  required: {
    fontSize: fontSizes.small,
    color: colors.danger,
    marginBottom: 4,
    fontFamily: fontFamily?.w3,
    fontWeight: '300',
  },
});
