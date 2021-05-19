import React, {useState} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, Button} from 'src/components';
import {COLORS} from 'src/constants';
import {dimensions} from 'src/styles';

const items = [
  {
    name: 'Joel Rowe',
    company: 'Bitrow Company',
    description:
      'Sorry, all the artists in the Interior Design category are busy right now. If your task is still relevant - go to the task details page and click "Extend task”.',
    icon: require('src/assets/images/notification-rowe.png'),
  },
  {
    name: 'Cole Payne',
    company: 'Corporation Kraton',
    description:
      'We have found a contractor for your task "Cleaning services”. Please see the details.',
    icon: require('src/assets/images/notification-payne.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    description: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    description: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    description: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
  {
    name: 'Elva Stone',
    company: 'Grand Service Company',
    description: `David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order.`,
    icon: require('src/assets/images/notification-stone.png'),
  },
];
export const Notifications = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const insets = useSafeAreaInsets();
  const showAllNotifications = () => {
    setIsShowAll(!isShowAll);
  };
  const renderItem = (item, index) => (
    <View style={styles.containerItem} key={index}>
      <View style={styles.shortInfo}>
        <Image source={item.icon} />
        <View style={styles.textContainer}>
          <Text extraStyles={styles.name}>{item.name}</Text>
          <Text fontVariant="label">{item.company}</Text>
        </View>
      </View>
      <Text extraStyles={styles.description} fontVariant="label">
        {item.description}
      </Text>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      {isShowAll
        ? items.map((item, index) => renderItem(item, index))
        : items
            .filter((item, index) => index < 3)
            .map((item, index) => renderItem(item, index))}
      <Button
        onPress={showAllNotifications}
        extraStyles={{
          marginBottom: insets.bottom || dimensions.VERTICAL_PADDING,
        }}>
        {isShowAll ? 'Hide' : 'View all'}
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: dimensions.HORIZONTAL_PADDING,
    marginTop: dimensions.VERTICAL_PADDING,
  },
  containerItem: {
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
  description: {
    color: COLORS.GREY_DEEPER,
    lineHeight: 24,
    textAlign: 'left',
  },
});
