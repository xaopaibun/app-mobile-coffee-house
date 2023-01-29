import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {authSelectors} from 'containers/App/selector';
import {StackParams} from 'types';
import {axios, formatMoney} from 'utils';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const MyOrderScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [listOrder, setListOrder] = useState([]);

  const {user} = useSelector(authSelectors);

  useEffect(() => {
    (async () => {
      const {data} = await axios.get(`/order/list-order/${user._id}`);
      setListOrder(data.reverse());
    })();
  }, [user._id]);

  const renderColor = (status: number) => {
    switch (status) {
      case 1:
        return '#242424';

      case 2:
        return '#303030';

      case 3:
        return '#808080';

      case 4:
        return '#27AE60';

      default:
        break;
    }
  };

  const renderText = (status: number) => {
    switch (status) {
      case 4:
        return 'Đã hoàn thành';
      case 3:
        return 'Đã huỷ';
      case 2:
        return 'Đã xác nhận đơn hàng';
      case 1:
        return 'Đang chờ xác nhận';
      default:
        return 'Đang chờ xử lý';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Đơn hàng</Text>
          </View>
          <View />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listOrder.map((value: any, index: number) => (
            <View style={styles.card} key={index}>
              <View style={styles.header_card}>
                <Text style={styles.title}>Đơn hàng {value._id.slice(18)}</Text>
                <Text style={styles.date}>{value.date.split('T')[0]}</Text>
              </View>
              <View style={styles.body_card}>
                <View style={styles.flex}>
                  <Text style={styles.label}>
                    Số lượng sản phẩm:
                    <Text style={styles.value}>
                      {' '}
                      {value?.list_product?.length}
                    </Text>
                  </Text>
                </View>
                <Text style={styles.label}>
                  Tổng tiền:{' '}
                  <Text style={styles.value}>
                    {formatMoney(value.total_money)} VNĐ
                  </Text>
                </Text>
                <View style={styles.flex}>
                  <TouchableOpacity style={styles.btnDetal}>
                    <Text style={styles.textDetal}>Chi tiết</Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.textStatus,
                      {color: renderColor(value.status)},
                    ]}>
                    {renderText(value.status)}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyOrderScreen;
