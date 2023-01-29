import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {useDispatch, useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {Button} from 'components';
import {authSelectors} from 'containers/App/selector';
import {resetCart} from 'containers/App/slice';
import {orderService} from 'services';
import {StackParams} from 'types';
import {
  axios,
  FROM_ADDRESS,
  FROM_DISTRICT_NAME,
  FROM_NAME,
  FROM_PHONE,
  FROM_PROVINCE_NAME,
  FROM_WARD_NAME,
} from 'utils';
import {homeSelectors} from '../selector';
import styles from './styles';

const PAYMENT_SHIPCOD = '0';
const PAYMENT_ONLINE = '1';
type Props = StackScreenProps<StackParams, 'Payment'>;

const CheckOutScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [loading, setLoading] = useState<boolean>(false);
  const {money, cart} = useSelector(homeSelectors);
  const {user} = useSelector(authSelectors);
  const dispatch = useDispatch();
  const [selectedOptionPayment, setSelectedOptionPayment] =
    useState<string>('');

  const handleCreateOrder = async () => {
    const payload = {
      payment_type_id: 2,
      note: '',
      from_name: FROM_NAME,
      from_phone: FROM_PHONE,
      from_address: FROM_ADDRESS,
      from_ward_name: FROM_WARD_NAME,
      from_district_name: FROM_DISTRICT_NAME,
      from_province_name: FROM_PROVINCE_NAME,
      required_note: 'KHONGCHOXEMHANG',
      return_name: FROM_NAME,
      return_phone: FROM_PHONE,
      return_address: FROM_ADDRESS,
      return_ward_name: FROM_WARD_NAME,
      return_district_name: FROM_DISTRICT_NAME,
      return_province_name: FROM_PROVINCE_NAME,
      client_order_code: '',
      to_name: 'Hoàng Ngọc Long',
      to_phone: '0993601731',
      to_address: 'Cổng làng lụa Vạn Phúc',
      to_ward_name: 'Phường Vạn Phúc',
      to_district_name: 'Quận Hà Đông',
      to_province_name: 'TP Hà Nội',
      weight: 200,
      length: 1,
      width: 19,
      height: 10,
      cod_amount: money,
      content: 'Theo New York Times',
      insurance_value: money,
      service_type_id: 2,
      coupon: null,
      pick_shift: null,
      items: cart,
    };
    try {
      const data = await Promise.all([
        axios.post(
          'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create',
          payload,
          {
            headers: {
              accept: 'application/json',
              token: 'b545bc44-82dc-11ed-a2ce-1e68bf6263c5',
            },
          },
        ),
        orderService.createOrder({
          user_id: user._id,
          full_name: user.name,
          email: user.email,
          phone_number: user.phone,
          total_money: money,
          address: user.address,
          list_product: cart.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      ]);
      if (data[0].data) {
        dispatch(resetCart());
        navigation.navigate('Congrats');
        PushNotification.localNotification({
          channelId: 'your-channel-id',
          ticker: 'Thông báo',
          message: data[0].data.message_display,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitOrder = async () => {
    if (selectedOptionPayment === PAYMENT_ONLINE) {
      setLoading(true);
      const {data} = await axios.post('/pay/create_payment_url', {
        amount: money,
        language: 'vn',
        orderType: 'billpayment',
        orderDescription: 'Thanh toán đơn hàng',
        bankCode: '',
      });
      setLoading(false);
      navigation.navigate('Payment', {link: data.vnpUrl});
    }

    if (selectedOptionPayment === PAYMENT_SHIPCOD) {
      handleCreateOrder();
    }

    // navigation.navigate('Congrats');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Thanh toán</Text>
          </View>
          <View />
        </View>
        <View>
          <View>
            <View style={styles.item_header}>
              <Text style={styles.label}>Địa chỉ giao hàng: </Text>
              <TouchableOpacity>
                <Image source={images.edit} />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <View style={styles.header_card}>
                <Text style={styles.title}>Phạm Văn Quý</Text>
              </View>
              <View style={styles.body_card}>
                <Text style={styles.address}>Số điện thoại: 0352343938</Text>
                <Text style={styles.address}>
                  Địa chỉ: 235 Hoàng Quốc Việt, Quận Bắc Từ Liêm, TP Hà Nội
                </Text>
              </View>
            </View>
          </View>

          {/* <View>
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
          </View> */}

          {/* <View>
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
          </View> */}
        </View>

        <View style={styles.card}>
          <View style={styles.body_card}>
            <View style={styles.flex}>
              <Text style={styles.label}> Chi phí: </Text>
              <Text style={styles.price}>
                {Intl.NumberFormat().format(money)} VND
              </Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.label}> Phí vận chuyển:</Text>
              <Text style={styles.price}>30.000 VND</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.label}> Giảm giá: </Text>
              <Text style={styles.price}>- 0 VND</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.label}> Tổng tiền:</Text>
              <Text style={{...styles.price, fontWeight: '700'}}>
                {Intl.NumberFormat().format(money + 30000)} VNĐ
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.body_card}>
            <Text style={styles.label}> Chọn phương thức thanh toán: </Text>
            <View style={styles.flexPayment}>
              <TouchableOpacity
                style={
                  selectedOptionPayment === PAYMENT_SHIPCOD
                    ? styles.btn
                    : styles.btnOutline
                }
                onPress={() => setSelectedOptionPayment(PAYMENT_SHIPCOD)}>
                <Text
                  style={
                    selectedOptionPayment === PAYMENT_SHIPCOD
                      ? styles.textBtn
                      : styles.textBtnOutline
                  }>
                  Ship COD
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  selectedOptionPayment === PAYMENT_ONLINE
                    ? styles.btn
                    : styles.btnOutline
                }
                onPress={() => setSelectedOptionPayment(PAYMENT_ONLINE)}>
                <Text
                  style={
                    selectedOptionPayment === PAYMENT_ONLINE
                      ? styles.textBtn
                      : styles.textBtnOutline
                  }>
                  Payment Online
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button
        label="SUBMIT ORDER"
        onPress={handleSubmitOrder}
        isLoading={loading}
        disabled={!selectedOptionPayment}
        containerStyle={[styles.btn, styles.footer]}
        testID="btnSubmit"
      />
    </SafeAreaView>
  );
};

export default CheckOutScreen;
