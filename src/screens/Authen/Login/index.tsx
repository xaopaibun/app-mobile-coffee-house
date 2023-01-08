import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {Input, Button} from 'components';
import {LoginRequest, StackParams, AppDispatch} from 'types';
import styles from './styles';
import {login} from './thunk';
import validationSchema from './validationSchema';

type Props = StackScreenProps<StackParams, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnSubmit = useCallback(
    async (values: LoginRequest) => {
      setLoading(true);
      const actionResult = await dispatch(login(values));
      if (login.fulfilled.match(actionResult)) {
        setLoading(false);
        navigation.navigate('Home');
      }
    },
    [dispatch, navigation],
  );

  const handleSignUp = useCallback(
    () => navigation.navigate('SignUp'),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <View style={styles.flex}>
          <View style={styles.borderLogin} />
          <Image source={images.logo_fish} style={{width: 80, height: 80}} />
          <View style={styles.borderLogin} />
        </View>
        <Text style={styles.title}>Xin chào !</Text>
        <Text style={styles.subTitle}>Shop đồ câu Phạm Jin</Text>
        <Formik
          onSubmit={handleOnSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}>
          {({handleSubmit}) => (
            <View style={styles.content}>
              <Text style={styles.label}>Email</Text>
              <Input name="email" testID="inputEmail" style={styles.input} />
              <Text style={styles.label}>Password</Text>
              <Input
                name="password"
                secureTextEntry
                testID="inputPassword"
                style={styles.input}
              />
              <TouchableOpacity>
                <Text style={styles.labelBtn}>Quên mật khẩu</Text>
              </TouchableOpacity>
              <Button
                label="Đăng nhập"
                onPress={handleSubmit}
                isLoading={loading}
                disabled={loading}
                containerStyle={styles.submit}
                testID="btnSubmit"
              />
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.labelBtn}>Đăng ký tài khoản</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.labelBtn}>Login Faceboook</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.labelBtn}>Login google</Text>
              </TouchableOpacity> */}
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const initialValues: LoginRequest = {
  email: 'vanquy33338888@gmail.com',
  password: 'a12345678',
};

export default LoginScreen;
