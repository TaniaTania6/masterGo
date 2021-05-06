import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from 'src/constants';

export const LeftButton = ({extraSource}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      {extraSource ? (
        <Image source={extraSource} style={styles.left} />
      ) : (
        <Image
          source={require('src/assets/images/arrow-left.png')}
          style={styles.left}
        />
      )}
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
        style={styles.right}
      />
    </TouchableOpacity>
  );
};

export const stylesHeaderText = {
  fontFamily: 'B612-Regular',
  fontSize: 18,
  fontWeight: '400',
  lineHeight: 22,
};

const styles = StyleSheet.create({
  right: {
    right: 20,
  },
  left: {
    left: 10,
  },
});
