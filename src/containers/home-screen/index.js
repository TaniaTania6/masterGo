import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, Button, Row} from 'src/components';

import {COLORS} from 'src/constants';

const buttonInfo = [
  {
    title: 'Phone number',
    phone: '+3746589923',
    icon: require('src/assets/images/btn-images/phone.png'),
  },
  {
    title: 'Email',
    phone: 'conrad@gmail.com',
    icon: require('src/assets/images/btn-images/email.png'),
  },
  {
    title: 'Completed projects',
    phone: '248',
    icon: require('src/assets/images/btn-images/point.png'),
  },
];
export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const renderDarkButton = item => {
    return (
      <TouchableOpacity style={styles.button} key={item.title}>
        <View style={styles.imageContainer}>
          <Image source={item.icon} />
        </View>
        <View style={styles.line} />
        <View style={styles.textWrapper}>
          <Text extraStyles={styles.buttonTitle}>{item.title}</Text>
          <Text extraStyles={styles.buttonText}>{item.phone}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Image
          source={require('src/assets/images/home-profile.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text extraStyles={styles.name} title>
            Jeremías del Pozo
          </Text>
          <Text>New York • ID: 1120611</Text>
        </View>
        <Button theme="noBorder" text="Edit" />
        <Row style={styles.buttonsContainer}>
          <Button
            extraStyles={styles.choiceButton}
            extraTextStyles={styles.buttonTitle}
            text="About Me"
            theme="small"
          />
          <Button text="Reviews" theme="small" />
        </Row>
      </View>
      <View
        style={[styles.contactsWrapper, {paddingBottom: insets.bottom + 20}]}>
        {buttonInfo.map(item => renderDarkButton(item))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
  },
  contactsWrapper: {
    backgroundColor: COLORS.GREY_DARKER,
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  button: {
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
  buttonTitle: {
    color: COLORS.GREY_DARK,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
  imageContainer: {
    justifyContent: 'center',
  },
  line: {
    width: 1,
    backgroundColor: COLORS.GREY_LIGHT,
    marginHorizontal: 25,
  },
  textWrapper: {
    alignItems: 'flex-start',
  },
  choiceButton: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: COLORS.TRANSPARENT,
  },
});
