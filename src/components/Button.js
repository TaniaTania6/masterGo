import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text} from 'src/components';
import {COLORS} from 'src/constants';

export const Button = ({
  children,
  text,
  theme = 'primary',
  icon,
  iconStyle = {},
  extraStyles = {},
  extraTextStyles = {},
  onPress,
}) => {
  const [buttonStyles, textStyles] = useMemo(() => {
    switch (theme) {
      case 'transparent':
        return [styles.transparentButton, styles.secondaryText];
      case 'circle':
        return [styles.circleButton, styles.primaryText];
      case 'social':
        return [styles.socialBtn, styles.primaryText];
      case 'noBorder':
        return [styles.noBorderBtn, styles.orangeText];
      case 'small':
        return [styles.smallBtn, styles.primaryText];
      default:
        return [styles.primaryButton, styles.primaryText];
    }
  }, [theme]);

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles, extraStyles]}
      onPress={onPress}
      activeOpacity={0.8}>
      {icon && <Image source={icon} styles={iconStyle} />}
      {text && (
        <Text
          content={text}
          extraStyles={[styles.text, textStyles, extraTextStyles]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: COLORS.TURQUOISE,
    width: '100%',
    paddingVertical: 20,
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
  },
  circleButton: {
    backgroundColor: COLORS.TURQUOISE,
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
  },
  socialBtn: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    width: '32%',
    alignItems: 'center',
  },
  noBorderBtn: {
    backgroundColor: 'transparent',
  },
  smallBtn: {
    backgroundColor: COLORS.TURQUOISE,
    width: '48%',
  },
  primaryText: {
    color: COLORS.WHITE,
    lineHeight: 19,
  },
  secondaryText: {
    color: COLORS.GREY_DARK,
  },
  orangeText: {
    color: COLORS.ORANGE,
    textDecorationLine: 'underline',
  },
});
