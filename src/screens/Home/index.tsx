import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
