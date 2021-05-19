import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';
import {sizes} from 'src/styles';

export const Text = ({
  extraStyles,
  title,
  fontWeight = 'normal',
  fontVariant = 'p',
  ...props
}) => {
  return (
    <NativeText
      style={[
        title ? styles.title : styles.text,
        fontVariant && sizes.fontVariants[fontVariant],
        fontWeight && sizes.fontWeights[fontWeight],
        extraStyles,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu-Regular',
    // color: COLORS.GREY_DARKER,
    // fontSize: 40,
    // fontWeight: '500',
    lineHeight: 45.96,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'B612-Regular',
    // color: COLORS.GREY_DARK,
    // fontSize: 16,
    // fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
  },
});
