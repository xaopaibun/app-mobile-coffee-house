import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  ViewStyle,
  View,
  StyleProp,
} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import {fontSizes, colors} from 'assets';
import styles from './style';

type Props = TouchableOpacityProps & {
  label: string;
  iconKey?: string;
  radius?: boolean;
  outline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
};

const Button: React.FC<Props> = ({
  label,
  containerStyle,
  radius,
  style,
  isLoading,
  disabled,
  outline = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        outline ? styles.outline : {},
        radius ? styles.radius50 : {},
        containerStyle,
        disabled ? styles.disabled : {},
      ]}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled}>
      {isLoading && (
        <View style={styles.icon}>
          <MaterialIndicator
            color={colors.white}
            size={fontSizes.small}
            trackWidth={fontSizes.small / 8}
          />
        </View>
      )}
      <Text style={[styles.label, outline ? styles.outlineLabel : {}, style]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
