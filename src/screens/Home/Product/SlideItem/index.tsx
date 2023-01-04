import React from 'react';
import {StyleSheet, View, Dimensions, Animated, Easing} from 'react-native';

const {width} = Dimensions.get('screen');

const SlideItem = ({item}: any) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: item}}
        resizeMode="cover"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
