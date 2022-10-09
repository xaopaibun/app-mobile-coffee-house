import { FC } from 'react';
import InputStyled from './styles';

type InputProps = {
  name: string;
  value: string;
};

const Input: FC<InputProps> = (props) => {
  return <InputStyled {...props} />;
};

export default Input;
