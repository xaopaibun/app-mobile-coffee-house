import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {StackParams} from 'types';
import styles from './styles';

type Props = StackScreenProps<StackParams, 'Home'>;

const SettingScreen: React.FC<Props> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={images.prev} />
          </TouchableOpacity>
          <View>
            <Text style={styles.subTitle}>Setting</Text>
          </View>
          <View />
        </View>
        <View style={styles.flex}>
          <Text style={styles.label}>Personal Information</Text>
          <TouchableOpacity>
            <Image source={images.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.labelInput}>Name</Text>
          <TextInput style={styles.input} value="Phạm Văn Quý" />
        </View>
        <View style={styles.itemView}>
          <Text style={styles.labelInput}>Email</Text>
          <TextInput style={styles.input} value="vanquy33338888@gmail.com" />
        </View>
        <View style={styles.flex}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity>
            <Image source={images.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.itemView}>
          <Text style={styles.labelInput}>Password</Text>
          <TextInput secureTextEntry style={styles.input} value="vanquy" />
        </View>
        <Text style={styles.label}>Notifications</Text>
        <View style={[styles.flex, styles.itemView]}>
          <Text style={styles.labelItem}>Sales</Text>
          <Switch />
        </View>
        <View style={[styles.flex, styles.itemView]}>
          <Text style={styles.labelItem}>New arrivals</Text>
          <Switch />
        </View>
        <View style={[styles.flex, styles.itemView]}>
          <Text style={styles.labelItem}>Delivery status changes</Text>
          <Switch />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
