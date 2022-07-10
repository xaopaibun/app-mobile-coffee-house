import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Props = {
  container: ViewStyle;
  containerView: ViewStyle;
  wrap_btn?: ViewStyle;
  btn_add_cart: ViewStyle;
  text_btn: TextStyle;
  text_title: TextStyle;
  text_content: TextStyle;
  btn_outline: ViewStyle;
  text_outline: TextStyle;
  viewImage: ImageStyle;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerView: {
    padding: 20,
  },
  btn_add_cart: {
    backgroundColor: '#242424',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text_btn: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  text_title: {
    color: '#303030',
    fontWeight: '700',
    fontSize: 36,
    textAlign: 'center',
  },
  text_content: {
    color: '#606060',
    fontSize: 18,
    marginHorizontal: 50,
    lineHeight: 30,
  },
  btn_outline: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_outline: {
    color: '#303030',
    fontSize: 18,
    fontWeight: '600',
  },
  viewImage: {
    height: '47%',
    width: '100%',
    marginVertical: 30,
  },
});
