import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {COLORS} from 'src/constants';

export const Input = ({placeholder, extraStyles, keyboardType, icon}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, extraStyles]}
        keyboardType={keyboardType}
      />
      {icon === 'eye' && (
        <Image
          source={require('src/assets/images/eye.png')}
          style={styles.imageEye}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: COLORS.GREY_INPUT,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    fontFamily: 'B612-Regular',
    // position: 'relative',
  },
  imageEye: {
    height: 12,
    width: 18,
    position: 'absolute',
    top: '35%',
    right: '5%',
  },
});
