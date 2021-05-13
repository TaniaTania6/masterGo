import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView, Text} from 'src/components';
import {Button} from 'src/components';
import {COLORS} from 'src/constants';

const items = [
  {
    name: 'Joel Rowe',
    company: 'Bitrow Company',
    data:
      'Sorry, all the artists in the Interior Design category are busy right now. If your task is still relevant - go to the task details page and click "Extend task”.',
    icon: require('src/assets/images/notification-rowe.png'),
  },
  {
    name: 'Cole Payne',
    company: 'Corporation Kraton',
    data:
      'We have found a contractor for your task "Cleaning services”. Please see the details.',
    icon: require('src/assets/images/notification-payne.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    data: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    data: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    data: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    data: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
];
export const Notifications = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const showAllNotifications = () => {
    setIsShowAll(!isShowAll);
  };
  const renderItem = (item, index) => (
    <View style={styles.container} key={index}>
      <View style={styles.shortInfo}>
        <Image source={item.icon} />
        <View style={styles.textContainer}>
          <Text content={item.name} extraStyles={styles.name} />
          <Text content={item.company} extraStyles={styles.company} />
        </View>
      </View>
      <Text content={item.data} extraStyles={styles.data} />
    </View>
  );
  return (
    <KeyboardAwareScrollView>
      {isShowAll
        ? items.map((item, index) => renderItem(item, index))
        : items
            .filter((item, index) => index < 3)
            .map((item, index) => renderItem(item, index))}
      <Button text="View all" onPress={showAllNotifications} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  shortInfo: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  textContainer: {
    paddingLeft: 10,
    alignItems: 'flex-start',
  },
  name: {
    color: COLORS.GREY_DARKER,
  },
  company: {
    fontSize: 14,
  },
  data: {
    fontSize: 14,
    color: COLORS.GREY_DEEPER,
    lineHeight: 24,
    textAlign: 'left',
  },
});
