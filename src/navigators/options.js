import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from 'src/constants';

export const LeftButton = ({extraSource}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={{height: 50, width: 60}}>
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
    right: 30,
  },
  left: {
    left: 30,
  },
});
