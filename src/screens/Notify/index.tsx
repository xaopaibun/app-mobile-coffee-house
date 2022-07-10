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

type Props = StackScreenProps<StackParams, 'Notify'>;

const NotifyScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={images.search_setting} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Notification</Text>
          </View>
          <View />
        </View>
        <View style={styles.notify_item}>
          <View style={styles.imageView}>
            <Image source={images.product1} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>
              Your order #123456789 has been shipped successfully
            </Text>
            <Text style={styles.text_content}>
              Please help us to confirm and rate your order to get 10% discount
              code for next order.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotifyScreen;
