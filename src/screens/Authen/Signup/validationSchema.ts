import {yup} from 'utils';

export default yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password'),
  confirm_password: yup
    .string()
    .required()
    .label('Confirm Password')
    .oneOf([yup.ref('password'), null], ''),
});
