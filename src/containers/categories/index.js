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

const buttonInfo = [
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
  const renderDarkButton = (item, index) => (
    <TouchableOpacity style={styles.button} key={index}>
      <View style={styles.wrapper}>
        <Image source={item.icon} style={styles.buttonImage} />
      </View>
      <Row style={styles.contentWrapper}>
        <Text extraStyles={styles.title}>{item.content}</Text>
        <Button
          icon={require('src/assets/images/arrow-right.png')}
          extraStyles={styles.buttonArray}
        />
      </Row>
    </TouchableOpacity>
  );
  return (
    <KeyboardAwareScrollView>
      <Input placeholder="Search by category" icon="search" />
      <View style={styles.categoriesWrapper}>
        {buttonInfo.map((item, index) => renderDarkButton(item, index))}
      </View>
      <Row style={styles.buttonContainer}>
        <Button
          extraStyles={styles.buttonStyles}
          extraTextStyles={styles.title}
          text="Back"
          theme="small"
        />
        <Button text="Next" theme="small" />
      </Row>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
  },
  categoriesWrapper: {
    marginVertical: 30,
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    flexDirection: 'row',
    marginVertical: 5,
  },
  contentWrapper: {
    flex: 1,
    paddingLeft: '5%',
  },
  buttonArray: {
    backgroundColor: COLORS.PRIMARY,
    width: '20%',
  },
  buttonImage: {
    width: 25,
    height: 27,
    alignSelf: 'center',
  },
  wrapper: {
    width: '25%',
    backgroundColor: COLORS.GREY_LIGHTER,
    padding: 23,
    justifyContent: 'center',
  },
  title: {
    color: COLORS.GREY_DARK,
  },
  buttonStyles: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: COLORS.TRANSPARENT,
  },
});
