import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  Button,
  Input,
  Row,
  KeyboardAwareScrollView,
} from 'src/components';

import {COLORS} from 'src/constants';

const btnInfo = [
  {
    content: 'Furniture works',
    icon: require('src/assets/images/categories-images/furniture-icon.png'),
  },
  {
    content: 'Cleaning services',
    icon: require('src/assets/images/categories-images/cleaning-icon.png'),
  },
  {
    content: 'Equipment repair',
    icon: require('src/assets/images/categories-images/equipment-icon.png'),
  },
  {
    content: 'Courier services',
    icon: require('src/assets/images/categories-images/courier-icon.png'),
  },
  {
    content: 'Interior design',
    icon: require('src/assets/images/categories-images/interior-icon.png'),
  },
];

export const Categories = () => {
  const renderDarkBtn = (item, index) => (
    <TouchableOpacity style={styles.btn} key={index}>
      <View style={styles.greyBlock}>
        <Image source={item.icon} style={styles.btnImg} />
      </View>
      <Row style={styles.contentBlock}>
        <Text content={item.content} extraStyles={styles.greyText} />
        <Button
          icon={require('src/assets/images/arrow-right.png')}
          extraStyles={styles.arrayBtn}
        />
      </Row>
    </TouchableOpacity>
  );
  return (
    <KeyboardAwareScrollView>
      <Input placeholder="Search by category" icon="search" />
      <View style={styles.categoriesBlock}>
        {btnInfo.map((item, index) => renderDarkBtn(item, index))}
      </View>
      <Row style={styles.btnContainer}>
        <Button
          extraStyles={styles.transparentBtn}
          extraTextStyles={styles.greyText}
          text="Back"
          theme="small"
        />
        <Button text="Next" theme="small" />
      </Row>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
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
    flex: 1,
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
  transparentBtn: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: 'transparent',
  },
});
