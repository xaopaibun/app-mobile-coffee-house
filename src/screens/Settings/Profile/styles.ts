import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  subTitle: TextStyle;
  containerView: ViewStyle;
  info_user: ViewStyle;
  avatar: ImageStyle;
  info: ViewStyle;
  text_bold: TextStyle;
  text: TextStyle;
  info_item: ViewStyle;
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
  info_user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  info: {},
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  text_bold: {
    fontWeight: '700',
    color: '#303030',
    fontSize: 20,
    lineHeight: 27,
  },
  text: {
    fontSize: 14,
    color: '#808080',
    marginTop: 6,
  },
  info_item: {
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
