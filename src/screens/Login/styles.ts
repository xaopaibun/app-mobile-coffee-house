import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  content: ViewStyle;
  header: ViewStyle;
  logo: ImageStyle;
  title: TextStyle;
  submit: ViewStyle;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingBottom: 128,
  },
  logo: {
    width: 200,
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: '600',
    paddingTop: 32,
  },
  submit: {
    marginBottom: 128,
  },
});
