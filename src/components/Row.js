import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Row = ({style, ...props}) => (
  <View style={[styles.container, style]} {...props} />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
