import {useFormikContext} from 'formik';
import React, {useMemo, memo, useCallback} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import styles from './style';

type Props = TextInputProps & {
  label?: string;
  name: string;
  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

type FormikProps = {
  [key in string]: any;
};

const Input: React.FC<Props> = ({
  label,
  name,
  required,
  containerStyle,
  style,
  onBlur,
  onChange,
  multiline,
  ...props
}) => {
  const {
    values,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = useFormikContext<FormikProps>();

  const hasError = useMemo(() => {
    return errors[name] && touched[name];
  }, [errors, touched, name]);

  const handleChange = useCallback(
    (text) => {
      setFieldValue(name, text);
      onChange && onChange(text);
    },
    [onChange, setFieldValue, name],
  );

  return (
    <View
      style={[
        hasError ? styles.containerHasError : styles.container,
        containerStyle,
      ]}>
      {!!label && (
        <Text style={styles.label}>
          {required && <Text style={styles.required}>※ </Text>}
          {label}
        </Text>
      )}
      <TextInput
        {...props}
        multiline={multiline}
        onChangeText={handleChange}
        onBlur={onBlur ? onBlur : handleBlur(name)}
        value={values[name]}
        style={[
          styles.default,
          multiline ? styles.multiline : styles.inline,
          style,
        ]}
      />
      {hasError && <Text style={styles.error}>{errors[name]}</Text>}
    </View>
  );
};

export default memo(Input);
