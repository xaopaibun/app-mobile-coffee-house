import socketIOClient from 'socket.io-client';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
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

  // const [messages, setMessages] = useState([]);
  // const socketRef = useRef<null>() as any;
  // useEffect(() => {
  //   socketRef.current = socketIOClient.connect('http://192.168.0.101:8000');
  // }, []);

  // const onSend = useCallback((messages = []) => {
  //   //console.log('messages', messages);
  //   socketRef.current.emit('messages-test', messages);

  //   socketRef.current.on('messages-test', (data: any) => {
  //     setMessages((previousMessages: any) =>
  //       GiftedChat.append(previousMessages, data),
  //     );
  //   });
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={images.search} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Yêu Thích</Text>
          </View>
          <TouchableOpacity onPress={handleOnCart}>
            <Image source={images.cart} />
          </TouchableOpacity>
        </View>
        {products.filter((item) => item.favorites === true).length === 0 ? (
          <Image
            source={{
              uri: 'https://stories.freepiklabs.com/storage/18377/no-data-rafiki-1356.png',
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: '100%', height: 450}}
          />
        ) : (
          <FlatList
            data={products.filter((item) => item.favorites === true)}
            numColumns={1}
            renderItem={({item}) => (
              <View style={styles.item}>
                <View style={styles.imageView}>
                  <Image
                    source={{uri: item.image[0]}}
                    style={styles.imageProduct}
                  />
                </View>
                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
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
            keyExtractor={({_id}) => _id.toString()}
          />
        )}
      </View>
      {products.filter((item) => item.favorites === true).length > 0 && (
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.textBtn}>Add all to my cart</Text>
        </TouchableOpacity>
      )}
      {/* <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      /> */}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
