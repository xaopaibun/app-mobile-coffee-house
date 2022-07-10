import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const MyOrderScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>My order</Text>
          </View>
          <View />
        </View>
        <View>
          <View style={styles.card}>
            <View style={styles.header_card}>
              <Text style={styles.title}>Order No238562312</Text>
              <Text style={styles.date}>20/03/2020</Text>
            </View>
            <View style={styles.body_card}>
              <View style={styles.flex}>
                <Text style={styles.label}>
                  Quantity: <Text style={styles.value}>03</Text>
                </Text>
                <Text style={styles.label}>
                  Total Amount: <Text style={styles.value}>$ 15.00</Text>
                </Text>
              </View>
              <View style={styles.flex}>
                <TouchableOpacity style={styles.btnDetal}>
                  <Text style={styles.textDetal}>Detail</Text>
                </TouchableOpacity>
                <Text style={styles.textStatus}>Delivered</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrderScreen;
