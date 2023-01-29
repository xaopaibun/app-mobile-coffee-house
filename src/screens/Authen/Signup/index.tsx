import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {Input, Button} from 'components';
import {StackParams, AppDispatch, SignUpRequest} from 'types';
import styles from './styles';
import {signup} from './thunk';
import validationSchema from './validationSchema';

type Props = StackScreenProps<StackParams, 'SignUp'>;

const SignupScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleOnSubmit = useCallback(
    async (values: SignUpRequest) => {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {confirm_password, ...value} = values;
      const actionResult = await dispatch(signup(value));
      if (signup.fulfilled.match(actionResult)) {
        setLoading(false);
        Alert.alert('Đăng ký tài khoản thành công!');
        navigation.navigate('Login');
      } else {
        setError(actionResult.payload.response?.data?.message || '');
        setLoading(false);
      }
    },
    [dispatch, navigation],
  );

  const handleOnSignIn = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <View style={styles.flex}>
          <View style={styles.borderLogin} />
          <Image source={images.icon_login} />
          <View style={styles.borderLogin} />
        </View>
        <Text style={styles.subTitle}>Xin chào</Text>
        <Formik onSubmit={handleOnSubmit} initialValues={initialValues}>
          {({handleSubmit}) => (
            <View style={styles.content}>
              <Text style={styles.label}>Họ tên: </Text>
              <Input name="name" style={styles.input} />
              <Text style={styles.label}>Email: </Text>
              <Input name="email" style={styles.input} />
              <Text style={styles.label}>Mật khẩu: </Text>
              <Input name="password" secureTextEntry style={styles.input} />
              <Text style={styles.label}>Xác nhận mật khẩu: </Text>
              <Input
                name="confirm_password"
                secureTextEntry
                style={styles.input}
              />
              <Text style={{color: 'red'}}>{error}</Text>
              <Button
                label="Đăng ký tài khoản"
                onPress={handleSubmit}
                isLoading={loading}
                disabled={loading}
                containerStyle={styles.submit}
                testID="btnSubmit"
              />
              <View style={styles.flexText}>
                <Text style={styles.labelAlready}>Bạn đã có tài khoản? </Text>
                <TouchableOpacity onPress={handleOnSignIn}>
                  <Text style={styles.labelSignIn}>Đăng nhập nào</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const initialValues: SignUpRequest = {
  email: 'quy@gmail.com',
  name: 'quy',
  password: 'a12345678',
  confirm_password: 'a12345678',
};

export default SignupScreen;
