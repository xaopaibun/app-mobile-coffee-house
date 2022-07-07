import {Formik} from 'formik';
import React, {useCallback, useState} from 'react';
import {Image, View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {images} from 'assets';
import {Input, Button} from 'components';
import {LoginRequest, StackParams, AppDispatch, SignUpRequest} from 'types';
import styles from './styles';
import {login} from './thunk';
import validationSchema from './validationSchema';

type Props = StackScreenProps<StackParams, 'SignUp'>;

const SignupScreen: React.FC<Props> = ({navigation}) => {
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
        <Text style={styles.subTitle}>WELCOME</Text>
        <Formik
          onSubmit={handleOnSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}>
          {({handleSubmit}) => (
            <View style={styles.content}>
              <Text style={styles.label}>Name</Text>
              <Input name="name" style={styles.input} />
              <Text style={styles.label}>Email</Text>
              <Input name="email" style={styles.input} />
              <Text style={styles.label}>Password</Text>
              <Input name="password" secureTextEntry style={styles.input} />
              <Text style={styles.label}>Confirm Password</Text>
              <Input
                name="confirm_password"
                secureTextEntry
                style={styles.input}
              />
              <Button
                label="SIGN UP"
                onPress={handleSubmit}
                isLoading={loading}
                disabled={loading}
                containerStyle={styles.submit}
                testID="btnSubmit"
              />
              <View style={styles.flexText}>
                <Text style={styles.labelAlready}>Already have account? </Text>
                <TouchableOpacity onPress={handleOnSignIn}>
                  <Text style={styles.labelSignIn}>SIGN IN</Text>
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
  email: '',
  name: '',
  password: '',
  confirm_password: '',
};

export default SignupScreen;
