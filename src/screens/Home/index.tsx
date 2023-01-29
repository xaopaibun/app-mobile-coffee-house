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
import {useDispatch, useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {getProductDetail} from 'containers/App/slice';
import {StackParams} from 'types';
import {homeSelectors} from './selector';
import styles from './styles';
import {getDataCategory, getDataProduct, getProductByCategory} from './thunk';

type Props = StackScreenProps<StackParams, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const {products, category, loading} = useSelector(homeSelectors);

  const [idTab, setIDTab] = useState<string>(category[0]?._id || '');

  const handleOnCart = () => navigation.navigate('CartScreen');

  const handleOnDetail = (product: ProductItem) => {
    dispatch(getProductDetail(product));
    navigation.navigate('ProductScreen');
  };

  const handleOnSearch = () => navigation.navigate('SearchScreen');

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
          <TouchableOpacity onPress={handleOnSearch}>
            <Image source={images.search} style={styles.icon} />
          </TouchableOpacity>
          <View>
            {/* <Text style={styles.title}>Menu</Text> */}
            <Text style={styles.subTitle}>Cửa Hàng Đồ Câu 24/7</Text>
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
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemProduct}
                onPress={() => handleOnDetail(item)}>
                <View style={styles.imageView}>
                  <Image
                    source={{uri: item.image[0]}}
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
                  {Intl.NumberFormat().format(item.variant[0].option[0].price)}{' '}
                  VND
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
