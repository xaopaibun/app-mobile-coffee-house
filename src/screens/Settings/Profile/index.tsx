import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {authSelectors} from 'containers/App/selector';
import {logout} from 'containers/App/slice';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;
const ProfileScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const {user} = useSelector(authSelectors);

  const handleLogout = () => {
    dispatch(logout());
  };

  const goMyOrder = () => navigation.navigate('MyOrderScreen');

  const goShipping = () => navigation.navigate('ShippingScreen');

  const goPayment = () => navigation.navigate('PaymentScreen');

  const goSetting = () => navigation.navigate('SettingScreen');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={images.search_setting} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Profile</Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Image source={images.logout} />
          </TouchableOpacity>
        </View>
        <View style={styles.info_user}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar,
            }}
          />
          <View style={styles.info}>
            <Text style={styles.text_bold}>{user.name}</Text>
            <Text style={styles.text}>{user.email}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.info_item} onPress={goMyOrder}>
          <View>
            <Text style={styles.text_bold}>My orders</Text>
            <Text style={styles.text}>Already have 10 orders</Text>
          </View>
          <Image source={images.next} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.info_item} onPress={goShipping}>
          <View>
            <Text style={styles.text_bold}>Shipping Addresses</Text>
            <Text style={styles.text}>03 Addresses</Text>
          </View>
          <Image source={images.next} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.info_item} onPress={goPayment}>
          <View>
            <Text style={styles.text_bold}>Payment Method</Text>
            <Text style={styles.text}>03 Addresses</Text>
          </View>
          <Image source={images.next} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.info_item}>
          <View>
            <Text style={styles.text_bold}>My reviews</Text>
            <Text style={styles.text}>Reviews for 5 items</Text>
          </View>
          <Image source={images.next} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.info_item} onPress={goSetting}>
          <View>
            <Text style={styles.text_bold}>Setting</Text>
            <Text style={styles.text}>
              Notification, Password, FAQ, Contact
            </Text>
          </View>
          <Image source={images.next} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
