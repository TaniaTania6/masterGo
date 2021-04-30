import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, Button, HalfButtons} from 'src/components';
import {default as Left} from 'src/assets/images/btn-images/tel.svg';

import {COLORS} from 'src/constants';

const btnInfo = [
  {
    content1: 'Phone number',
    content2: '+3746589923',
    icon: require('src/assets/images/btn-images/tel.png'),
  },
  {
    content1: 'Email',
    content2: 'conrad@gmail.com',
    icon: require('src/assets/images/btn-images/email.png'),
  },
  {
    content1: 'Completed projects',
    content2: '248',
    icon: require('src/assets/images/btn-images/point.png'),
  },
];

const renderDarkBtn = item => {
  return (
    <Button style={styles.darkBtn}>
      {/* <Left width={100} height={100} /> */}
      <Image source={item.icon} style={styles.btnImg} />
      <View style={styles.greyLine} />
      <View style={styles.innerText}>
        <Text content={item.content1} extraStyles={styles.greyText} />
        <Text content={item.content2} extraStyles={styles.whiteText} />
      </View>
    </Button>
  );
};

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={styles.whiteBlock}>
        <Image
          source={require('src/assets/images/home_profile.png')}
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
        <Button style={styles.btnEdit}>
          <Text content="Edit" extraStyles={styles.orangeText} />
        </Button>
        <HalfButtons content1="About Me" content2="Reviews" />
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
    backgroundColor: COLORS.PRIMARY,
    marginVertical: 40,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  greyBlock: {
    backgroundColor: COLORS.GREY_DARK,
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  darkBtn: {
    backgroundColor: COLORS.GREY_DARK,
    borderWidth: 1,
    borderColor: COLORS.GREY_LIGHT,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingVertical: 17,
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
  btnEdit: {
    backgroundColor: COLORS.PRIMARY,
    width: 'auto',
  },
  orangeText: {
    color: COLORS.ORANGE,
    textDecorationLine: 'underline',
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfBtn: {
    width: '48%',
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
  },
  greyText: {
    color: COLORS.GREY_LIGHT,
  },
  whiteText: {
    color: COLORS.WHITE,
  },
  btnImg: {
    width: 17,
    height: 17,
    alignSelf: 'center',
  },
  greyLine: {
    width: 1,
    backgroundColor: COLORS.PAGINATION_POINT_ACTIVE,
    marginHorizontal: 25,
  },
  innerText: {
    alignItems: 'flex-start',
  },
});
