import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const data = {
  id: 1,
  name: 'Cappuccino',
  price: '$ 2.00',
  content:
    'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',
  image:
    'https://journeythefood.com/wp-content/uploads/2020/08/pexels-tirachard-kumtanom-544113-2-1024x1024.jpg',
};
const ProductScreen: React.FC<Props> = ({navigation}) => {
  const [quatity, setQuatity] = useState(1);

  const handleIncrement = () => setQuatity(quatity + 1);

  const handleDecrement = () =>
    setQuatity((state) => (state > 1 ? state - 1 : state));

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{uri: data.image}} style={styles.image_product} />
        <TouchableOpacity style={styles.btn_back} onPress={goBack}>
          <Image source={images.prev} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrap_content}>
        <View style={styles.content_top}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.wrap_price_quatity}>
            <Text style={styles.price}>{data.price}</Text>
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
            <Text style={styles.number_star}>4.5</Text>
            <Text style={styles.label_review}>(50 reviews)</Text>
          </View>
          <Text style={styles.content}>{data.content}</Text>
        </View>
        <View style={styles.wrap_btn}>
          <TouchableOpacity style={styles.btn_favorites}>
            <Image source={images.favorites} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_add_cart}>
            <Text style={styles.text_btn}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
