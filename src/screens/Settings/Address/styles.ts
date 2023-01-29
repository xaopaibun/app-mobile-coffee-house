import {StyleSheet} from 'react-native';
import {fontSizes} from 'assets';

export default StyleSheet.create({
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
    alignItems: 'center',
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
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
  },
  labelCheckbox: {
    fontSize: 18,
    color: '#242424',
    marginLeft: 10,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textButton: {
    fontSize: 24,
    fontWeight: '600',
  },
  labelItem: {
    color: '#242424',
    fontWeight: '600',
    fontSize: 16,
  },
  itemView: {
    marginVertical: 12,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 6,
  },
  input: {
    paddingVertical: 10,
    fontSize: 15,
    color: '#242424',
    fontWeight: '600',
  },
  labelInput: {
    color: '#808080',
    fontSize: 12,
    marginVertical: 6,
  },
});
