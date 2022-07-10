import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {logout} from 'containers/App/slice';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;
const ProfileScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

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
              uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/291417760_2580211752126885_7742110454069241259_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=h2glk_cpExAAX95vzYU&tn=rNIOW-CEnQr-FK5P&_nc_ht=scontent.fhan2-1.fna&oh=00_AT_NHjBtDOPXf0d9S5KRevyyBqrmBgWM3Dx1VOHQNQ42Fg&oe=62CD69E7',
            }}
          />
          <View style={styles.info}>
            <Text style={styles.text_bold}>Pham Jin</Text>
            <Text style={styles.text}>Vanquy33338888@gmail.com</Text>
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
