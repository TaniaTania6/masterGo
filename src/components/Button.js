import React from 'react';
import {StyleSheet} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {COLORS} from 'src/constants';

export const Button = props => {
  return (
    <TouchableScale
      style={[styles.button, props.style]}
      onPress={props.onPress}
      activeScale={0.95}>
      {props.children}
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: COLORS.TURQUOISE,
    color: COLORS.WHITE,
    height: '8%',
    width: '75%',
    paddingVertical: 20,
  },
});
