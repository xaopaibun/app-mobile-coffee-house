import {StyleSheet} from 'react-native';
import {fontSizes} from 'assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
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
  input: {
    padding: 10,
    paddingLeft: 50,
  },
  icon: {
    position: 'absolute',
    top: 5,
    left: 10,
    zIndex: 9,
  },
  wrapSearch: {
    position: 'relative',
    width: '100%',
    height: 36,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  item: {
    height: 80,
    width: 60,
    marginHorizontal: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemProduct: {
    position: 'relative',
    flex: 0.5,
    margin: 5,
  },
  imageProduct: {
    width: '100%',
    height: 230,
    borderRadius: 10,
  },
  iconShopping: {
    width: 20,
    height: 20,
  },
  name: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#303030',
  },
  shopping: {
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: 'rgba(96, 96, 96, 0.4)',
    borderRadius: 6,
    bottom: 10,
    right: 10,
    zIndex: 999,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    position: 'relative',
    width: 'auto',
  },
  textLabel: {
    fontSize: 14,
    color: '#999999',
  },
});
