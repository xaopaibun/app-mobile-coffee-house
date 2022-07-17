import {ProductItem} from 'src/types/home';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {addCart, favoritesProductByID} from 'containers/App/slice';
import {StackParams} from 'types';
import {homeSelectors} from '../selector';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const ProductScreen: React.FC<Props> = ({navigation}) => {
  const [quatity, setQuatity] = useState<number>(1);
  const [isLove, setIsLove] = useState<boolean>(false);

  const {productDetail} = useSelector(homeSelectors);
  const handleIncrement = () => setQuatity(quatity + 1);

  const handleDecrement = () =>
    setQuatity((state) => (state > 1 ? state - 1 : state));

  const dispatch = useDispatch();

  const goBack = () => navigation.goBack();

  const handleAddCart = (product: ProductItem) => {
    dispatch(
      addCart({
        id: product.id,
        quatity,
        title: product.title,
        price: product.price,
        image: product.image,
      }),
    );
    navigation.navigate('CartScreen');
  };

  const handleFavoriter = (id: number) => {
    setIsLove((state) => !state);
    dispatch(favoritesProductByID(id));
  };

  useEffect(() => {
    setIsLove(productDetail.favorites!);
  }, [productDetail.favorites]);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{uri: productDetail.image}}
          style={styles.image_product}
        />
        <TouchableOpacity style={styles.btn_back} onPress={goBack}>
          <Image source={images.prev} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrap_content}>
        <ScrollView
          style={styles.content_top}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.name}>{productDetail.title}</Text>
          <View style={styles.wrap_price_quatity}>
            <Text style={styles.price}>
              {Intl.NumberFormat().format(productDetail.price)} VND
            </Text>
            <View style={styles.flex}>
              <TouchableOpacity
                style={styles.btn_augment}
                onPress={handleIncrement}>
                <Image source={images.add} />
              </TouchableOpacity>
              <Text style={styles.number}>
                {quatity < 10 && '0'}
                {quatity}
              </Text>
              <TouchableOpacity
                style={styles.btn_augment}
                onPress={handleDecrement}>
                <Image source={images.reduce} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.wrap_star}>
            <Image source={images.star} />
            <Text style={styles.number_star}>{productDetail.rating.rate}</Text>
            <Text style={styles.label_review}>
              ({productDetail.rating.count} reviews)
            </Text>
          </View>
          <Text style={styles.content}>{productDetail.description}</Text>
        </ScrollView>
        <View style={styles.wrap_btn}>
          <TouchableOpacity
            style={styles.btn_favorites}
            onPress={() => handleFavoriter(productDetail.id)}>
            <Image source={!isLove ? images.marker : images.marker_active} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn_add_cart}
            onPress={() => handleAddCart(productDetail)}>
            <Text style={styles.text_btn}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
