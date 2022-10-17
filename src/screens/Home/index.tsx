import {ProductItem} from 'src/types/home';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Platform,
  DeviceEventEmitter,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import RNMomosdk from 'react-native-momosdk';
import {useDispatch, useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {getProductDetail} from 'containers/App/slice';
import {StackParams} from 'types';
import {homeSelectors} from './selector';
import styles from './styles';
import {getDataCategory, getDataProduct, getProductByCategory} from './thunk';

const RNMomosdkModule = NativeModules.RNMomosdk;
const EventEmitter = new NativeEventEmitter(RNMomosdkModule);

const merchantname = 'CGV Cinemas';
const merchantcode = 'CGV01';
const merchantNameLabel = 'Nhà cung cấp';
const billdescription = 'Fast and Furious 8';
const amount = 50000;
const enviroment = '0'; //"0": SANBOX , "1": PRODUCTION
type Props = StackScreenProps<StackParams, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const {products, category, loading} = useSelector(homeSelectors);

  const [idTab, setIDTab] = useState<string>('');

  const handleOnCart = () => navigation.navigate('CartScreen');

  const handleOnDetail = (product: ProductItem) => {
    dispatch(getProductDetail(product));
    navigation.navigate('ProductScreen');
  };

  useEffect(() => {
    EventEmitter.addListener(
      'RCTMoMoNoficationCenterRequestTokenReceived',
      (response) => {
        try {
          console.log('<MoMoPay>Listen.Event::' + JSON.stringify(response));
          if (response && response.status == 0) {
            //SUCCESS: continue to submit momoToken,phonenumber to server
            let fromapp = response.fromapp; //ALWAYS:: fromapp==momotransfer
            let momoToken = response.data;
            let phonenumber = response.phonenumber;
            let message = response.message;
            let orderId = response.refOrderId;
          } else {
            //let message = response.message;
            //Has Error: show message here
          }
        } catch (ex) {}
      },
    );
    //OPTIONAL
    EventEmitter.addListener(
      'RCTMoMoNoficationCenterRequestTokenState',
      (response) => {
        console.log('<MoMoPay>Listen.RequestTokenState:: ' + response.status);
        // status = 1: Parameters valid & ready to open MoMo app.
        // status = 2: canOpenURL failed for URL MoMo app
        // status = 3: Parameters invalid
      },
    );
  }, []);
  useEffect(() => {
    Promise.all([
      dispatch(
        getDataCategory({
          limit: 10,
          page: 1,
        }),
      ),
      dispatch(
        getDataProduct({
          limit: 10,
          page: 1,
        }),
      ),
    ]);
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={images.search} style={styles.icon} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Menu</Text>
            <Text style={styles.subTitle}>Coffee House</Text>
          </View>
          <TouchableOpacity onPress={handleOnCart}>
            <Image source={images.cart} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewSelect}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category &&
              category.map((value, index) => (
                <TouchableOpacity
                  style={idTab === value._id ? styles.btn : styles.btnOutline}
                  key={index}
                  onPress={() => {
                    setIDTab(value._id);
                    dispatch(
                      getProductByCategory({
                        limit: 10,
                        page: 1,
                        category_id: value._id,
                      }),
                    );
                  }}>
                  <Text
                    style={
                      idTab === value._id
                        ? styles.textBtn
                        : styles.textBtnOutline
                    }>
                    {value.category_name}
                  </Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemProduct}
                onPress={() => handleOnDetail(item)}>
                <View style={styles.imageView}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.imageProduct}
                  />
                  <TouchableOpacity style={styles.shopping}>
                    <Image
                      source={images.shopping_bag}
                      style={styles.iconShopping}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  {Intl.NumberFormat().format(item.price)} VND
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item._id.toString()}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
