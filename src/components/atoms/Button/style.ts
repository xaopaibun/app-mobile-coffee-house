import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors, fontFamily, fontSizes} from 'assets';

type StyleProps = {
  container: ViewStyle;
  outline: ViewStyle;
  radius50: ViewStyle;
  disabled: ViewStyle;
  label: TextStyle;
  outlineLabel: TextStyle;
  icon: ViewStyle;
};

export default StyleSheet.create<StyleProps>({
  container: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.borderPrimary,
    backgroundColor: colors.white,
  },
  radius50: {
    borderRadius: 50,
    borderBottomWidth: 2,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: colors.white,
    fontWeight: '600',
    fontSize: fontSizes.small,
    fontFamily: fontFamily?.w6,
    lineHeight: fontSizes.small + 3,
  },
  outlineLabel: {
    color: colors.primary,
  },
  icon: {
    width: fontSizes.small,
    marginRight: 4,
  },
});
