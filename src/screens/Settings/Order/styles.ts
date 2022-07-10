import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  subTitle: TextStyle;
  containerView: ViewStyle;
  card: ViewStyle;
  header_card: ViewStyle;
  body_card: ViewStyle;
  title: TextStyle;
  date: TextStyle;
  flex: ViewStyle;
  label: TextStyle;
  value: TextStyle;
  textDetal: TextStyle;
  btnDetal: ViewStyle;
  textStatus: ViewStyle;
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
  card: {
    width: '100%',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 6,
  },
  header_card: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#909090',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body_card: {
    padding: 20,
  },
  title: {
    fontSize: fontSizes.custom(16),
    color: '#303030',
    fontWeight: '600',
  },
  date: {
    color: '#808080',
    fontSize: fontSizes.custom(14),
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: fontSizes.custom(16),
    color: '#808080',
  },
  value: {
    fontWeight: '700',
    color: '#303030',
  },
  textDetal: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  btnDetal: {
    backgroundColor: '#242424',
    borderRadius: 4,
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  textStatus: {
    color: '#27AE60',
    fontWeight: '600',
    fontSize: 16,
  },
});
