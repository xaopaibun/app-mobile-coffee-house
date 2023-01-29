import {debounce} from 'lodash';
import {ProductItem} from 'src/types/home';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {getProductDetail} from 'containers/App/slice';
import {homeService} from 'services';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'SearchScreen'>;

const SearchScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();

  const [loading, setLoading] = useState<boolean>(false);

  const [products, setProducts] = useState<Array<ProductItem>>([]);

  const dispatch = useDispatch();

  const handleSearch = async (name: string) => {
    try {
      setLoading(true);
      const {data} = await homeService.searchProduct(name);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleOnDetail = (product: ProductItem) => {
    dispatch(getProductDetail(product));
    navigation.navigate('ProductScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Tìm kiếm</Text>
          </View>
          <View />
        </View>
        <View style={styles.wrapSearch}>
          <TouchableOpacity>
            <Image source={images.search} style={styles.icon} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            autoFocus
            placeholder="Nhập tên sản phẩm"
            onChangeText={debounce((value) => handleSearch(value), 1000)}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={products}
            ListEmptyComponent={
              <Image
                source={{
                  uri: 'https://hajde.media/img/no-results.png',
                }}
                style={{width: '100%', height: 280}}
              />
            }
            style={{marginTop: 30}}
            showsVerticalScrollIndicator={false}
            numColumns={2}
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
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
