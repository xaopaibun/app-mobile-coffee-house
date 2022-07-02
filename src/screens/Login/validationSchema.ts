import {yup} from 'utils';

export default yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password'),
});
