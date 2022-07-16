import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Congrats'>;

const CongratsScreen: React.FC<Props> = ({navigation}) => {
  const handleGoHome = () => navigation.navigate('Home');

  const handleGoOrders = () => navigation.navigate('MyOrderScreen');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.text_title}>SUCCESS!</Text>
        <Image source={images.success} style={styles.viewImage} />
        <Text style={styles.text_content}>
          Your order will be delivered soon. Thank you for choosing our app!
        </Text>
        <View style={styles.wrap_btn}>
          <TouchableOpacity
            style={styles.btn_add_cart}
            onPress={handleGoOrders}>
            <Text style={styles.text_btn}>Track your orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_outline} onPress={handleGoHome}>
            <Text style={styles.text_outline}>BACK TO HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CongratsScreen;
