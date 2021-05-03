import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button, Input} from 'src/components';

import {COLORS} from 'src/constants';

const btnInfo = [
  {
    content1: 'Furniture works',
    icon: require('src/assets/images/categories-images/furniture-icon.png'),
  },
  {
    content1: 'Cleaning services',
    icon: require('src/assets/images/categories-images/cleaning-icon.png'),
  },
  {
    content1: 'Equipment repair',
    icon: require('src/assets/images/categories-images/equipment-icon.png'),
  },
  {
    content1: 'Courier services',
    icon: require('src/assets/images/categories-images/courier-icon.png'),
  },
  {
    content1: 'Interior design',
    icon: require('src/assets/images/categories-images/interior-icon.png'),
  },
];

const renderDarkBtn = (item, index) => (
  <TouchableOpacity style={styles.btn} key={index}>
    <View style={styles.greyBlock}>
      <Image source={item.icon} style={styles.btnImg} />
    </View>
    <View style={styles.contentBlock}>
      <Text content={item.content1} extraStyles={styles.greyText} />
      <Button
        theme="noBorder"
        icon={require('src/assets/images/arrow-right.png')}
        extraStyles={styles.arrayBtn}
      />
    </View>
  </TouchableOpacity>
);

export const Categories = () => (
  <View style={styles.container}>
    <Input placeholder="Search by category" />
    <View style={[styles.categoriesBlock]}>
      {btnInfo.map((item, index) => renderDarkBtn(item, index))}
    </View>
    <View style={styles.btnContainer}>
      <Button
        extraStyles={styles.transparentBtn}
        extraTextStyles={styles.greyText}
        text="Back"
        theme="small"
      />
      <Button extraStyles={styles.turquoiseColor} text="Next" theme="small" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    paddingTop: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  categoriesBlock: {
    marginVertical: 30,
    width: '100%',
  },
  btn: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    flexDirection: 'row',
    marginVertical: 5,
  },
  contentBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: '5%',
  },
  arrayBtn: {
    backgroundColor: COLORS.PRIMARY,
    width: '20%',
  },
  btnImg: {
    width: 25,
    height: 27,
    alignSelf: 'center',
  },
  greyBlock: {
    width: '25%',
    backgroundColor: COLORS.GREY_LIGHTER,
    padding: 23,
    justifyContent: 'center',
  },
  greyText: {
    color: COLORS.GREY_DARK,
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
