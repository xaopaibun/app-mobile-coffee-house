import {ProductItem} from 'src/types/home';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {addCart, favoritesProductByID} from 'containers/App/slice';
import {StackParams} from 'types';
import {formatMoney} from 'utils';
import {homeSelectors} from '../selector';
import Pagination from './Pagination';
import SlideItem from './SlideItem';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const ProductScreen: React.FC<Props> = ({navigation}) => {
  const [quantity, setquantity] = useState<number>(1);
  const [isLove, setIsLove] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<any>();

  const {productDetail} = useSelector(homeSelectors);
  const handleIncrement = () => setquantity(quantity + 1);

  const handleDecrement = () =>
    setquantity((state) => (state > 1 ? state - 1 : state));

  const dispatch = useDispatch();

  const goBack = () => navigation.goBack();

  const handleAddCart = (product: ProductItem) => {
    dispatch(
      addCart({
        _id: product._id,
        quantity,
        name: `${product.name} - ${optionSelected.value}`,
        option: optionSelected.value,
        length: product.length,
        weight: product.weight,
        width: product.width,
        height: product.height,
        price: optionSelected.price,
        image: product.image[0],
      }),
    );
    navigation.navigate('CartScreen');
  };

  const handleFavoriter = (id: string) => {
    dispatch(favoritesProductByID(id));
  };

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        {/* <Image
          source={{uri: productDetail.image}}
          style={styles.image_product}
        /> */}
        <FlatList
          style={styles.image_product}
          data={productDetail.image}
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination
          data={productDetail.image}
          scrollX={scrollX}
          index={index}
        />
        <TouchableOpacity style={styles.btn_back} onPress={goBack}>
          <Image source={images.prev} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrap_content}>
        <ScrollView
          style={styles.content_top}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.name}>{productDetail.name}</Text>
          <View style={styles.wrap_price_quantity}>
            <Text style={styles.price}>
              {!optionSelected
                ? `${formatMoney(
                    productDetail.variant[0].option[0].price,
                  )} - ${formatMoney(
                    productDetail.variant[0].option[
                      productDetail.variant[0].option.length - 1
                    ].price,
                  )}`
                : formatMoney(optionSelected?.price)}
              {'  '}VND
            </Text>
            <View style={styles.flex}>
              <TouchableOpacity
                style={styles.btn_augment}
                onPress={handleIncrement}>
                <Image source={images.add} />
              </TouchableOpacity>
              <Text style={styles.number}>
                {quantity < 10 && '0'}
                {quantity}
              </Text>
              <TouchableOpacity
                style={styles.btn_augment}
                onPress={handleDecrement}>
                <Image source={images.reduce} />
              </TouchableOpacity>
            </View>
          </View>
          {productDetail.variant.map((item: any) => {
            return (
              <View style={styles.selectOption}>
                <Text style={styles.name}>{item.name}: </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {item.option.map((item: any) => (
                    <TouchableOpacity
                      style={
                        optionSelected?._id === item._id
                          ? styles.btn
                          : styles.btnOutline
                      }
                      onPress={() => setOptionSelected(item)}>
                      <Text
                        style={
                          optionSelected?._id === item._id
                            ? styles.textBtn
                            : styles.textBtnOutline
                        }>
                        {item.value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            );
          })}
          {/* <View style={styles.wrap_star}>
            <Image source={images.star} />
            <Text style={styles.number_star}>{5}</Text>
            <Text style={styles.label_review}>20 reviews</Text>
          </View> */}
          <Text style={styles.content}>{productDetail.content}</Text>
        </ScrollView>
        <View style={styles.wrap_btn}>
          <TouchableOpacity
            style={styles.btn_favorites}
            onPress={() => handleFavoriter(productDetail._id)}>
            <Image
              source={
                !productDetail.favorites ? images.marker : images.marker_active
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!optionSelected}
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.btn_add_cart, {opacity: !optionSelected ? 0.6 : 1}]}
            onPress={() => handleAddCart(productDetail)}>
            <Text style={styles.text_btn}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
