import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {Button} from 'components';
import {
  decrementCartByID,
  increaseCartByID,
  removeCartByID,
} from 'containers/App/slice';
import {StackParams} from 'types';
import {homeSelectors} from '../selector';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const CartScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();

  const dispatch = useDispatch();

  const handleGoCheckOut = () => navigation.navigate('CheckOutScreen');

  const {cart, money} = useSelector(homeSelectors);

  const handleDeleteCartByID = (id: string) => dispatch(removeCartByID(id));

  const handleIncrease = (id: string) => dispatch(increaseCartByID(id));

  const handleDecrement = (id: string) => dispatch(decrementCartByID(id));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Giỏ hàng của tôi</Text>
          </View>
          <View />
        </View>
        <FlatList
          ListEmptyComponent={
            <View>
              <Image
                source={{
                  uri: 'https://krassvietnam.com/images/empty-cart.png',
                }}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: '100%', height: 380}}
              />
            </View>
          }
          data={cart}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={styles.imageView}>
                <Image source={{uri: item.image}} style={styles.imageProduct} />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  {Intl.NumberFormat().format(item.price)} VND - {item.option}
                </Text>
                <View style={styles.flex}>
                  <TouchableOpacity
                    style={styles.btn_augment}
                    onPress={() => handleIncrease(item._id)}>
                    <Image source={images.add} />
                  </TouchableOpacity>
                  <Text style={styles.number}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.btn_augment}
                    onPress={() => handleDecrement(item._id)}>
                    <Image source={images.reduce} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.func}>
                <TouchableOpacity
                  onPress={() => handleDeleteCartByID(item._id)}>
                  <Image source={images.delete} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      </ScrollView>
      {/* <View style={[styles.flex_total, styles.promo]}>
        <TextInput
          placeholder="Vui lòng nhập mã giảm giá (nếu có)"
          style={styles.promo_code}
        />
        <TouchableOpacity style={styles.btnNext}>
          <Image source={images.next_while} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.flex_total}>
        <Text style={styles.text_total}>Tổng:</Text>
        <Text style={styles.total}>
          {Intl.NumberFormat().format(money)} VND
        </Text>
      </View>
      {/* <TouchableOpacity style={styles.btn} onPress={handleGoCheckOut}>
        <Text style={styles.textBtn}>Thanh toán</Text>
      </TouchableOpacity> */}
      <Button
        label="Thanh toán"
        onPress={handleGoCheckOut}
        disabled={!cart.length}
        containerStyle={styles.btn}
        testID="btnSubmit"
      />
    </SafeAreaView>
  );
};

export default CartScreen;
