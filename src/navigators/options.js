import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from 'src/constants';

export const LeftButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={require('src/assets/images/arrow-left.png')}
        style={styles.imgL}
      />
    </TouchableOpacity>
  );
};

export const RightButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ROUTES.APP);
      }}>
      <Image
        source={require('src/assets/icons/menu.png')}
        style={styles.imgR}
      />
    </TouchableOpacity>
  );
};

export const RightButtonDISABLED = () => (
  <TouchableOpacity>
    <Image source={require('src/assets/icons/menu.png')} style={styles.imgR} />
  </TouchableOpacity>
);

export const stylesHeaderText = {
  fontFamily: 'B612-Regular',
  fontSize: 18,
  fontWeight: '400',
  lineHeight: 22,
};

const styles = StyleSheet.create({
  imgR: {
    right: 20,
  },
  imgL: {
    left: 10,
  },
});
