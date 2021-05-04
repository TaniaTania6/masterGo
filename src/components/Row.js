import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Row = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
