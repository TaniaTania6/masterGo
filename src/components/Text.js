import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';
import {COLORS} from 'src/constants';

export const Text = ({content, extraStyles, bigFormat}) => {
  return (
    <NativeText
      style={
        bigFormat ? [styles.title, extraStyles] : [styles.text, extraStyles]
      }>
      {content}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu-Regular',
    color: COLORS.GREY_DARK,
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 45.96,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'B612-Regular',
    color: COLORS.GREY_LIGHT,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
  },
});
