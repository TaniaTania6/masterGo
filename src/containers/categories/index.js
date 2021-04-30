import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Button, Input, HalfButtons} from 'src/components';

import {COLORS} from 'src/constants';

const btnInfo = [
  {
    content1: 'Furniture works',
    icon: require('src/assets/images/categories-images/1.png'),
  },
  {
    content1: 'Cleaning services',
    icon: require('src/assets/images/categories-images/2.png'),
  },
  {
    content1: 'Equipment repair',
    icon: require('src/assets/images/categories-images/3.png'),
  },
  {
    content1: 'Courier services',
    icon: require('src/assets/images/categories-images/4.png'),
  },
  {
    content1: 'Interior design',
    icon: require('src/assets/images/categories-images/5.png'),
  },
];

const renderDarkBtn = (item, index) => (
  <Button style={styles.btn} key={index}>
    <View style={styles.greyBlock}>
      <Image source={item.icon} style={styles.btnImg} />
    </View>
    <View style={styles.contentBlock}>
      <Text content={item.content1} extraStyles={styles.greyText} />
      <Button style={styles.arrayBtn}>
        <Image source={require('src/assets/images/arrow-right.png')}/>
      </Button>
    </View>
  </Button>
);

export const Categories = () => (
  <View style={styles.container}>
    <Input placeholder="Search by category" />
    <View style={[styles.categoriesBlock]}>
      {btnInfo.map((item, index) => renderDarkBtn(item, index))}
    </View>
    <HalfButtons content1="Back" content2="Next" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    paddingTop: 20,
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
    paddingVertical: 0,
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
    height: 25,
    alignSelf: 'center',
  },
  greyBlock: {
    width: '25%',
    backgroundColor: COLORS.GREY_INPUT,
    padding: 10,
    justifyContent: 'center',
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
});
