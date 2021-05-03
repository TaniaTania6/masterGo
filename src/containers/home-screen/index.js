import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, Button} from 'src/components';

import {COLORS} from 'src/constants';

const btnInfo = [
  {
    title: 'Phone number',
    data: '+3746589923',
    icon: require('src/assets/images/btn-images/phone.png'),
  },
  {
    title: 'Email',
    data: 'conrad@gmail.com',
    icon: require('src/assets/images/btn-images/email.png'),
  },
  {
    title: 'Completed projects',
    data: '248',
    icon: require('src/assets/images/btn-images/point.png'),
  },
];
export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const renderDarkBtn = item => {
    return (
      <TouchableOpacity style={styles.darkBtn} key={item.icon}>
        <View style={styles.imageContainer}>
          <Image source={item.icon} />
        </View>
        <View style={styles.greyLine} />
        <View style={styles.innerText}>
          <Text content={item.title} extraStyles={styles.greyText} />
          <Text content={item.data} extraStyles={styles.whiteText} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteBlock}>
        <Image
          source={require('src/assets/images/home-profile.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text
            content="Jeremías del Pozo"
            extraStyles={styles.name}
            bigFormat
          />
          <Text content="New York • ID: 1120611" />
        </View>
        <Button
          theme="noBorder"
          text="Edit"
          extraTextStyles={styles.orangeText}
        />

        <View style={styles.btnContainer}>
          <Button
            extraStyles={styles.transparentBtn}
            extraTextStyles={styles.greyText}
            text="About Me"
            theme="small"
          />
          <Button
            extraStyles={styles.turquoiseColor}
            text="Reviews"
            theme="small"
          />
        </View>
      </View>
      <View style={[styles.greyBlock, {paddingBottom: insets.bottom + 20}]}>
        {btnInfo.map(item => renderDarkBtn(item))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  whiteBlock: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  greyBlock: {
    backgroundColor: COLORS.GREY_DARKER,
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  darkBtn: {
    backgroundColor: COLORS.GREY_DARKER,
    borderWidth: 1,
    borderColor: COLORS.GREY_DARK,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingVertical: 15,
  },
  image: {
    width: '35%',
    height: '38%',
    borderRadius: 50,
  },
  textContainer: {
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    lineHeight: 28,
    paddingBottom: 5,
  },
  orangeText: {
    color: COLORS.ORANGE,
    textDecorationLine: 'underline',
  },
  greyText: {
    color: COLORS.GREY_DARK,
  },
  whiteText: {
    color: COLORS.WHITE,
  },
  imageContainer: {
    justifyContent: 'center',
  },
  greyLine: {
    width: 1,
    backgroundColor: COLORS.GREY_LIGHT,
    marginHorizontal: 25,
  },
  innerText: {
    alignItems: 'flex-start',
  },
  turquoiseColor: {
    backgroundColor: COLORS.TURQUOISE,
  },
  transparentBtn: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: 'transparent',
  },
});
