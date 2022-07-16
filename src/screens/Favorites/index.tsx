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
import {useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {homeSelectors} from 'screens/Home/selector';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const FavoritesScreen: React.FC<Props> = ({navigation}) => {
  const {products} = useSelector(homeSelectors);

  const handleOnCart = () => navigation.navigate('CartScreen');

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
          <TouchableOpacity onPress={handleOnCart}>
            <Image source={images.cart} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={products.filter((item) => item.favorites === true)}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View style={styles.imageView}>
                <Image source={{uri: item.image}} style={styles.imageProduct} />
              </View>
              <View style={styles.info}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>
                  {Intl.NumberFormat().format(item.price)}
                </Text>
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
