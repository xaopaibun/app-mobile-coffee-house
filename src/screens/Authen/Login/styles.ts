import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  containerView: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
  borderLogin: ViewStyle;
  flex: ViewStyle;
  content: ViewStyle;
  label: TextStyle;
  labelBtn: TextStyle;
  submit: ViewStyle;
  input: ViewStyle;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },
  containerView: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: fontSizes.custom(24),
    color: '#909090',
    fontWeight: '400',
    marginLeft: 15,
  },
  subTitle: {
    fontSize: fontSizes.custom(24),
    color: '#303030',
    fontWeight: '700',
    marginLeft: 15,
  },
  borderLogin: {
    width: '33%',
    height: 2,
    backgroundColor: '#BDBDBD',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    height: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  label: {
    fontSize: 14,
    marginVertical: 10,
    color: '#909090',
  },
  labelBtn: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#303030',
    marginVertical: 10,
  },
  submit: {
    backgroundColor: '#242424',
    marginVertical: 10,
    shadowColor: '#242424',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});
