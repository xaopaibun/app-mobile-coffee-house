import {io} from 'socket.io-client';
import React, {useEffect, useRef} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Notify'>;

const NotifyScreen: React.FC<Props> = () => {
  //const [permissions, setPermissions] = useState<any>({});

  // const onRemoteNotification = (notification: any) => {
  //   const isClicked = notification.getData().userInteraction === 1;

  //   if (isClicked) {
  //     // Navigate user to another screen
  //   } else {
  //     // Do something else with push notification
  //   }
  //   // Use the appropriate result based on what you needed to do for this notification
  //   const result = PushNotificationIOS.FetchResult.NoData;
  //   notification.finish(result);
  // };

  useEffect(() => {
    // const type = 'notification';
    // PushNotificationIOS.addEventListener(type, onRemoteNotification);
    // return () => {
    //   PushNotificationIOS.removeEventListener(type);
    // };
    PushNotification.localNotification({
      channelId: 'your-channel-id',
      ticker: 'Thông báo',
      message: 'Đơn hàng của bạn đã được Shop xác nhận thành công!',
    });
  }, []);

  const socketRef = useRef<any>();
  useEffect(() => {
    //socketRef.current = socketIOClient.connect('http://192.168.0.104:8000');
    socketRef.current = io('http://192.168.0.104:8000', {
      reconnectionDelayMax: 10000,
    });
    console.log('socketRef.current', socketRef.current);
    socketRef.current.io.on('ping', () => {
      console.log('ping');
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={images.search_setting} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Thông Báo</Text>
          </View>
          <View />
        </View>
        <View style={styles.notify_item}>
          <View style={styles.imageView}>
            <Image source={images.success_notification} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>
              Your order #123456789 has been shipped successfully
            </Text>
            <Text style={styles.text_content}>
              Please help us to confirm and rate your order to get 10% discount
              code for next order.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotifyScreen;
