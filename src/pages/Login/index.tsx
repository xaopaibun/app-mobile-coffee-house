import { FC } from 'react';
import { useAppDispatch } from 'hooks';
import { signIn } from 'containers/Auth/thunk';
import { SignInReq } from 'types';
import { FormikProvider, useFormik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import * as Yup from 'yup';
import SectionStyled from './styles';
const Login: FC = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'quypv@mor.com.vn',
      password: 'a12345678',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required().email().max(300),
      password: Yup.string().required().max(30),
    }),
    onSubmit: (values: SignInReq) => {
      dispatch(signIn(values));
    },
  });
  return (
    <SectionStyled>
      <FormikProvider value={formik}>
        <Form name="basic" className="form-login" autoComplete="off">
          <Form.Item label="Email" name="email">
            <Input name="email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password name="password" />
          </Form.Item>

          <SubmitButton type="primary" htmlType="submit">
            Submit
          </SubmitButton>
        </Form>
      </FormikProvider>
    </SectionStyled>
  );
};

export default Login;
