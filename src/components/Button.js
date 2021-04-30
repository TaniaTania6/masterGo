import React from 'react';
import {StyleSheet} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {COLORS} from 'src/constants';

export const Button = ({children, onPress, style}) => {
  return (
    <TouchableScale
      style={[styles.button, style]}
      onPress={onPress}
      activeScale={0.95}>
      {children}
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: COLORS.TURQUOISE,
    width: '100%',
    paddingVertical: 20,
  },
});
