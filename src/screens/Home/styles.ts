import {StyleSheet, ViewStyle} from 'react-native';

type Props = {
  container: ViewStyle;
};

export default StyleSheet.create<Props>({
  container: {
    flex: 1,
  },
});
