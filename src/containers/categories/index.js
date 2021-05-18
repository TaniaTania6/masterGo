import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  Button,
  Input,
  Row,
  KeyboardAwareScrollView,
} from 'src/components';

import {COLORS} from 'src/constants';
import {
  CategoryCleaning,
  CategoryCourier,
  CategoryEquipment,
  CategoryFurniture,
  CategoryInterior,
  ArrowRight,
} from 'src/assets/svg';

const buttonInfo = [
  {
    title: 'Furniture works',
    icon: CategoryFurniture,
  },
  {
    title: 'Cleaning services',
    icon: CategoryCleaning,
  },
  {
    title: 'Equipment repair',
    icon: CategoryEquipment,
  },
  {
    title: 'Courier services',
    icon: CategoryCourier,
  },
  {
    title: 'Interior design',
    icon: CategoryInterior,
  },
];

export const Categories = () => {
  const renderDarkButton = (item, index) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity style={styles.button} key={index}>
        <View style={styles.wrapper}>
          <Icon width={25} height={27} />
        </View>
        <Row style={styles.contentWrapper}>
          <Text extraStyles={styles.title}>{item.title}</Text>
          <Button icon={ArrowRight} extraStyles={styles.buttonArray} />
        </Row>
      </TouchableOpacity>
    );
  };
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
    borderColor: COLORS.BUTTON_BORDER,
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
    borderColor: COLORS.BUTTON_BORDER,
    backgroundColor: COLORS.TRANSPARENT,
  },
});
