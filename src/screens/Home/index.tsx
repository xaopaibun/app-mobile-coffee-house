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
  const [idTab, setIDTab] = useState<number>(0);
  const dispatch = useDispatch();

  const {products, category, loading} = useSelector(homeSelectors);

  const handleOnCart = () => navigation.navigate('CartScreen');

  const handleOnDetail = (product: ProductItem) => {
    dispatch(getProductDetail(product));
    navigation.navigate('ProductScreen');
  };

  useEffect(() => {
    Promise.all([dispatch(getDataProduct()), dispatch(getDataCategory())]);
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
              category?.map((value, index) => (
                <TouchableOpacity
                  style={idTab === value._id ? styles.btn : styles.btnOutline}
                  key={index}
                  onPress={() => {
                    setIDTab(value._id);
                    // if (value.name === 'tat-ca') {
                    //   dispatch(getDataProduct());
                    // } else {
                    //   dispatch(getProductByCategory(value.name));
                    // }
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
