import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {fontSizes} from 'assets';

type Props = {
  container: ViewStyle;
  header: ViewStyle;
  subTitle: TextStyle;
  containerView: ViewStyle;
  flex: ViewStyle;
  label: TextStyle;
  labelItem: TextStyle;
  itemView: ViewStyle;
  input: ViewStyle;
  labelInput: TextStyle;
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
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#909191',
    fontSize: fontSizes.custom(16),
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
  },
});
