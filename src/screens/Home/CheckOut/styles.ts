import {
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  subTitle: TextStyle;
  containerView: ViewStyle;
  btn: TouchableOpacityProps;
  textBtn: TextStyle;
  item_header: ViewStyle;
  label: TextStyle;
  card: ViewStyle;
  header_card: ViewStyle;
  body_card: ViewStyle;
  title: TextStyle;
  address: TextStyle;
  flex: ViewStyle;
  price: TextStyle;
  card_payment: ViewStyle;
  text_dhl: TextStyle;
  flex_dhl: ViewStyle;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
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
  btn: {
    backgroundColor: '#242424',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  textBtn: {
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
  },
  item_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#909090',
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
  },
  body_card: {
    padding: 20,
  },
  title: {
    fontSize: fontSizes.custom(18),
    color: '#303030',
    fontWeight: '700',
  },
  address: {
    color: '#808080',
    lineHeight: 25,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  price: {
    fontWeight: '600',
    color: '#242424',
    fontSize: 18,
  },
  card_payment: {
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_dhl: {
    fontSize: fontSizes.custom(14),
    color: '#303030',
    fontWeight: '700',
    marginLeft: 12,
  },
  flex_dhl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
