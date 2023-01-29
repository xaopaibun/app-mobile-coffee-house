import React, {useState} from 'react';
import {
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

const ShippingScreen: React.FC<Props> = ({navigation}) => {
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
            <Text style={styles.subTitle}>Shipping address</Text>
          </View>
          <View />
        </View>
        <View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={handleToggleCheckBox}>
              <Image
                source={isSelected ? images.checkboxon : images.checkboxoff}
              />
            </TouchableOpacity>
            <Text style={styles.labelCheckbox}>
              Use as the shipping address
            </Text>
          </View>
          <View style={styles.card}>
            <View style={styles.header_card}>
              <Text style={styles.title}>Bruno Fernandes</Text>
              <TouchableOpacity>
                <Image source={images.edit} />
              </TouchableOpacity>
            </View>
            <View style={styles.body_card}>
              <Text style={styles.address}>
                25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddressUserScreen')}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShippingScreen;
