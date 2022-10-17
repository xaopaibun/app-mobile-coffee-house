import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
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
          {/* <Image source={images.logo_coffee} height={50} width={50} /> */}
          <View style={styles.borderLogin} />
        </View>
        <Text style={styles.title}>Hello !</Text>
        <Text style={styles.subTitle}>WELCOME BACK</Text>
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
                <Text style={styles.labelBtn}>Forgot Password</Text>
              </TouchableOpacity>
              <Button
                label="Log in"
                onPress={handleSubmit}
                isLoading={loading}
                disabled={loading}
                containerStyle={styles.submit}
                testID="btnSubmit"
              />
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.labelBtn}>SIGN UP</Text>
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
