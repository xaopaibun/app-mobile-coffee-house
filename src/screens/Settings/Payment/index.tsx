import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
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

const PaymentScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [isSelected, setSelection] = useState<boolean>(false);
  const handleToggleCheckBox = () => setSelection((state) => !state);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Payment method</Text>
          </View>
          <View />
        </View>
        <ImageBackground
          source={images.payment_card}
          style={styles.backgroundImage}>
          <Image source={images.mastercard} style={styles.imageCard} />
          <Text style={styles.numberCard}>
            * * * * {'  '}* * * * {'  '} * * * * {'  '}3947
          </Text>
          <View style={styles.flex}>
            <View>
              <Text style={styles.labelCard}>Card Holder Name</Text>
              <Text style={styles.value}>Jennyfer Doe</Text>
            </View>
            <View>
              <Text style={styles.labelCard}>Expiry Date</Text>
              <Text style={styles.value}>05/23</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={handleToggleCheckBox}>
            <Image
              source={isSelected ? images.checkboxon : images.checkboxoff}
            />
          </TouchableOpacity>
          <Text style={styles.labelCheckbox}>Use as the shipping address</Text>
        </View>
      </ScrollView>
      <View style={styles.footerView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
