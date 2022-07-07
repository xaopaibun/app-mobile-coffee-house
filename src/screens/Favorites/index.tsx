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
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
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
  {
    id: 5,
    name: 'Black Simple',
    price: '$ 12.00',
    image: 'https://onlinelighting.com.au/images/detailed/131/SKU285939.jpg',
  },
  {
    id: 6,
    name: 'Minimal Stand',
    price: '$ 25.00',
    image:
      'https://cdn.shopify.com/s/files/1/0004/7107/2819/products/Marston-Wide-TVstand-Oak-OFD180SQ25-1b_ee48244d-568b-4c6c-afc4-6370d472051c_800x.jpg?v=1614676881',
  },
  {
    id: 7,
    name: 'Coffee Chair',
    price: '$ 16.00',
    image:
      'https://www.zuiver.com/media/catalog/product/cache/75d4fed6916b4fccba5b665c8fe3ed87/1/1/1100489_0_1000x1000_50m.jpg',
  },
  {
    id: 8,
    name: 'Simple Desk',
    price: '$ 20.00',
    image:
      'https://ae01.alicdn.com/kf/H5359806ad8eb4b728b63000a9316a5acy/Computer-Desk-Desktop-Nordic-Simple-Desk-Writing-Desk-Simple-Home-Student-Desk-Single-Bedroom-Small-Table.jpg_Q90.jpg_.webp',
  },
];

const FavoritesScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={images.search} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Favorites</Text>
          </View>
          <TouchableOpacity>
            <Image source={images.cart} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={styles.imageView}>
                <Image source={{uri: item.image}} style={styles.imageProduct} />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.func}>
                <TouchableOpacity>
                  <Image source={images.delete} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shopping_bag}>
                  <Image source={images.shopping_bag_active} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={({id}) => id.toString()}
        />
      </ScrollView>
      <TouchableOpacity style={styles.btnAdd}>
        <Text style={styles.textBtn}>Add all to my cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
