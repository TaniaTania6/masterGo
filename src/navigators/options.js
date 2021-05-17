import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from 'src/constants';

export const LeftButton = ({extraSource}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack} style={styles.button}>
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
      style={[styles.button, styles.buttonRight]}
      onPress={navigation.toggleDrawer}>
      <Image
        source={require('src/assets/icons/menu.png')}
        style={styles.right}
      />
    </TouchableOpacity>
  );
};

export const headerOptionsFull = {
  headerStyle: {
    backgroundColor: COLORS.PRIMARY,
  },
  headerLeft: LeftButton,
  headerRight: RightButton,
  headerTintColor: COLORS.GREY_DARKER,
  headerTitleStyle: {
    fontFamily: 'B612-Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
  },
  headerTitleAlign: 'center',
};

export const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 40,
    justifyContent: 'center',
  },
  buttonRight: {
    width: 50,
  },
  right: {
    right: 0,
  },
  left: {
    left: 30,
  },
  headerText: {
    fontFamily: 'B612-Regular',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22,
  },
  headerStyle: {
    backgroundColor: COLORS.PRIMARY,
  },
});
