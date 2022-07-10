import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {logout} from 'containers/App/slice';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const data = [
  {
    id: 1,
    name: 'Black Simple',
    price: '$ 12.00',
    image: 'https://onlinelighting.com.au/images/detailed/131/SKU285939.jpg',
  },
  {
    id: 2,
    name: 'Minimal Stand',
    price: '$ 25.00',
    image:
      'https://cdn.shopify.com/s/files/1/0004/7107/2819/products/Marston-Wide-TVstand-Oak-OFD180SQ25-1b_ee48244d-568b-4c6c-afc4-6370d472051c_800x.jpg?v=1614676881',
  },
  {
    id: 3,
    name: 'Coffee Chair',
    price: '$ 16.00',
    image:
      'https://www.zuiver.com/media/catalog/product/cache/75d4fed6916b4fccba5b665c8fe3ed87/1/1/1100489_0_1000x1000_50m.jpg',
  },
  {
    id: 4,
    name: 'Simple Desk',
    price: '$ 20.00',
    image:
      'https://ae01.alicdn.com/kf/H5359806ad8eb4b728b63000a9316a5acy/Computer-Desk-Desktop-Nordic-Simple-Desk-Writing-Desk-Simple-Home-Student-Desk-Single-Bedroom-Small-Table.jpg_Q90.jpg_.webp',
  },
];

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const handleOnCart = () => navigation.navigate('CartScreen');

  const handleOnDetail = () => navigation.navigate('ProductScreen');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleLogout}>
            <Image source={images.search} style={styles.icon} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Make home</Text>
            <Text style={styles.subTitle}>BEAUTIFUL</Text>
          </View>
          <TouchableOpacity onPress={handleOnCart}>
            <Image source={images.cart} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewSelect}>
          <ScrollView horizontal>
            <View style={styles.item}>
              <TouchableOpacity style={styles.selected}>
                <Image source={images.star} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.textLabel}>Popular</Text>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.selected}>
                <Image source={images.chair} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.textLabel}>Chair</Text>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.selected}>
                <Image source={images.table} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.textLabel}>Table</Text>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.selected}>
                <Image source={images.sofa} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.textLabel}>Armchair</Text>
            </View>
            <View style={styles.item}>
              <TouchableOpacity style={styles.selected}>
                <Image source={images.bed} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.textLabel}>Bed</Text>
            </View>
          </ScrollView>
        </View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemProduct}
              onPress={handleOnDetail}>
              <View style={styles.imageView}>
                <Image source={{uri: item.image}} style={styles.imageProduct} />
                <TouchableOpacity style={styles.shopping}>
                  <Image
                    source={images.shopping_bag}
                    style={styles.iconShopping}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={({id}) => id.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
