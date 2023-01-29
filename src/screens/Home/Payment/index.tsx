import axios from 'axios';
import React from 'react';
import {Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from 'containers/App/selector';
import {resetCart} from 'containers/App/slice';
import {orderService} from 'services';
import {
  FROM_ADDRESS,
  FROM_DISTRICT_NAME,
  FROM_NAME,
  FROM_PHONE,
  FROM_PROVINCE_NAME,
  FROM_WARD_NAME,
} from 'utils';
import {homeSelectors} from '../selector';

const Payment: React.FC = ({route, navigation}: any) => {
  const {money, cart} = useSelector(homeSelectors);
  const {user} = useSelector(authSelectors);
  const dispatch = useDispatch();
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
      cod_amount: 0,
      content: 'Đặt hàng online qua app mobile',
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
          payment: 2,
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
  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <WebView
        source={{
          uri: route.params.link,
        }}
        onNavigationStateChange={async (navState: any) => {
          const {data} = await axios.get(navState.url);
          if (data.code === '00') {
            handleCreateOrder();
          }
          if (data.code === '24') {
            navigation.navigate('CheckOutScreen');
            Alert.alert('Giao dịch bị huỷ!');
          }
        }}
      />
    </SafeAreaView>
  );
};
export default Payment;
