import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';
import {COLORS} from 'src/constants';

export const Text = ({extraStyles, title, ...props}) => {
  return (
    <NativeText
      style={[title ? styles.title : styles.text, extraStyles]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu-Regular',
    color: COLORS.GREY_DARKER,
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 45.96,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'B612-Regular',
    color: COLORS.GREY_DARK,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
  },
});
