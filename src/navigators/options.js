import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {ROUTES, COLORS} from 'src/constants';

export const LeftButton = ({extraSource}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack} style={styles.btn}>
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
      style={[styles.btn, styles.btnRight]}
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

export const styles = StyleSheet.create({
  btn: {
    height: 20,
    width: 40,
    justifyContent: 'center',
  },
  btnRight: {
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
