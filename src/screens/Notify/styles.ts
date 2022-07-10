import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  subTitle: TextStyle;
  containerView: ViewStyle;
  notify_item: ViewStyle;
  imageView: ViewStyle;
  image: ImageStyle;
  content: ViewStyle;
  title: TextStyle;
  text_content: TextStyle;
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
  notify_item: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    flex: 0.15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  content: {
    flex: 0.85,
    marginLeft: 20,
  },
  title: {
    fontWeight: '700',
    color: '#303030',
    fontSize: 13,
  },
  text_content: {
    fontSize: 11.5,
    color: '#808080',
    marginTop: 6,
  },
});
