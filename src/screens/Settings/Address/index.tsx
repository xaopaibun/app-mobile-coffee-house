import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const HOST = 'https://provinces.open-api.vn';
const AddressUserScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [listProvince, setListProvinces] = useState([]);
  const [listDistricts, setListDistricts] = useState([]);
  const [city, setCity] = useState('');
  // const handleToggleCheckBox = () => setSelection((state) => !state);

  useEffect(() => {
    (async () => {
      const {data} = await axios.get(`${HOST}/api/?depth=3`);
      setListProvinces(
        data.map((value: any) => ({
          ...value,
          key: Math.random(),
          label: value.name,
          value: value.name,
        })),
      );
    })();
  }, []);

  useEffect(() => {
    const districts = listProvince
      ?.find((item: any) => item.name === city)
      ?.districts?.map((value: any) => ({
        ...value,
        label: value.name,
        value: value.name,
      }));
    setListDistricts(districts);
    console.log(12, listDistricts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Thêm Địa Chỉ</Text>
          </View>
          <View />
        </View>
        <View>
          <View style={styles.itemView}>
            <Text style={styles.labelInput}>Chọn thành phố: </Text>
            <RNPickerSelect
              onValueChange={(value) => setCity(value)}
              items={listProvince}
              key="1"
            />
          </View>

          <View style={styles.itemView}>
            <Text style={styles.labelInput}>Chọn quận, huyện: </Text>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={listDistricts}
              key="2"
            />
          </View>
          {/* 
          <View style={styles.itemView}>
            <Text style={styles.labelInput}>Chọn phường, xã: </Text>
            <RNPickerSelect
              itemKey={'name'}
              onValueChange={(value) => console.log(value)}
              items={listProvince}
            />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressUserScreen;
