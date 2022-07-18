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
import {resetCart} from 'containers/App/slice';
import {StackParams} from 'types';
import {homeSelectors} from '../selector';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const CheckOutScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();

  const {money} = useSelector(homeSelectors);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Check out</Text>
          </View>
          <View />
        </View>
        <View>
          <View>
            <View style={styles.item_header}>
              <Text style={styles.label}>Shipping Address</Text>
              <TouchableOpacity>
                <Image source={images.edit} />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <View style={styles.header_card}>
                <Text style={styles.title}>Phạm Văn Quý</Text>
              </View>
              <View style={styles.body_card}>
                <Text style={styles.address}>Phone: 0352343938</Text>
                <Text style={styles.address}>
                  Address: 235 Hoàng Quốc Việt, Quận Bắc Từ Liêm, TP Hà Nội
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.item_header}>
              <Text style={styles.label}>Payment</Text>
              <TouchableOpacity>
                <Image source={images.edit} />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <View style={[styles.body_card, styles.card_payment]}>
                <Image source={images.master_card} />
                <Text>**** **** **** 3947</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.item_header}>
              <Text style={styles.label}>Delivery method</Text>
              <TouchableOpacity>
                <Image source={images.edit} />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <View style={[styles.body_card, styles.flex_dhl]}>
                <Image source={images.dhl} />
                <Text style={styles.text_dhl}>Fast (2-3days)</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.body_card}>
            <View style={styles.flex}>
              <Text style={styles.label}> Order: </Text>
              <Text style={styles.price}>
                {' '}
                {Intl.NumberFormat().format(money)}
              </Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.label}> Delivery:</Text>
              <Text style={styles.price}>30,000</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.label}> Total:</Text>
              <Text style={{...styles.price, fontWeight: '700'}}>
                {Intl.NumberFormat().format(money + 30000)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch(resetCart());
          navigation.navigate('Congrats');
        }}>
        <Text style={styles.textBtn}>SUBMIT ORDER</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckOutScreen;
