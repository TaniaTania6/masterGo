import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'src/components';
import {COLORS} from 'src/constants';

export const Button = ({
  children,
  theme = 'primary',
  fontWeight,
  fontVariant,
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
        return [styles.socialButton, styles.primaryText];
      case 'plain':
        return [styles.plainButton, styles.orangeText];
      case 'small':
        return [styles.smallButton, styles.primaryText];
      default:
        return [styles.primaryButton, styles.primaryText];
    }
  }, [theme]);
  const Icon = icon;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles, extraStyles]}
      onPress={onPress}
      activeOpacity={0.8}>
      {icon && <Icon width={17} height={17} />}
      {children && (
        <Text
          extraStyles={[textStyles, extraTextStyles]}
          fontWeight={fontWeight}
          fontVariant={fontVariant}>
          {children}
        </Text>
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
    backgroundColor: COLORS.TRANSPARENT,
    borderWidth: 1,
    borderColor: COLORS.BUTTON_BORDER,
  },
  circleButton: {
    backgroundColor: COLORS.TURQUOISE,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.BUTTON_BORDER,
    flex: 0.32,
    alignItems: 'center',
  },
  plainButton: {
    backgroundColor: COLORS.TRANSPARENT,
  },
  smallButton: {
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
