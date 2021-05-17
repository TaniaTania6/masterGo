import React, {useState} from 'react';
import {FlatList, StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'src/components';
import {LeftButton} from 'src/navigators/options';
import {COLORS, ROUTES} from 'src/constants';
import {notch} from 'src/styles';

const items = [
  {
    id: 1,
    content: 'Home',
    source: require('src/assets/images/drawer-images/home.png'),
    route: ROUTES.HOMESCREEN,
  },
  {
    id: 2,
    content: 'Categories',
    source: require('src/assets/images/drawer-images/categories.png'),
    route: ROUTES.CATEGORIES,
  },
  {
    id: 3,
    content: 'Notifications',
    source: require('src/assets/images/drawer-images/notifications.png'),
    route: ROUTES.NOTIFICATIONS,
  },
  {
    id: 4,
    content: 'Orders in progress',
    source: require('src/assets/images/drawer-images/orders.png'),
    route: ROUTES.ORDERS_IN_PROGRESS,
  },
  {
    id: 5,
    content: 'Construction works',
    source: require('src/assets/images/drawer-images/orders.png'),
    route: ROUTES.CONSTRUCTION_WORKS,
  },
  {
    id: 6,
    content: 'Payment for services',
    source: require('src/assets/images/drawer-images/orders.png'),
    route: ROUTES.PAYMENT_FOR_SERVICES,
  },
  {
    id: 7,
    content: 'Customer info',
    source: require('src/assets/images/drawer-images/orders.png'),
    route: ROUTES.CUSTOMER_INFO,
  },
];

const HEADER_HEIGHT_IOS = 45;
const HEADER_HEIGHT_ANDROID = 55;

export const DrawerContent = () => {
  const navigation = useNavigation();
  const [activeId, setActiveId] = useState(1);

  const getHeaderHeight = () => {
    let headerHeightPlatform;
    let statusBarHeight;

    if (Platform.OS === 'ios') {
      headerHeightPlatform = HEADER_HEIGHT_IOS;
    } else {
      headerHeightPlatform = HEADER_HEIGHT_ANDROID;
    }

    statusBarHeight = notch.getStatusBarHeight(notch.isIphoneX());

    return headerHeightPlatform + statusBarHeight;
  };

  const handlePress = ({id, route}) => {
    setActiveId(id);
    navigation.navigate(route);
  };

  const renderMenuItem = (onPress, item, id) => (
    <View style={styles.itemContainer}>
      <Button
        onPress={() => onPress(item)}
        extraStyles={
          id === item.id ? [styles.btn, styles.activeBtn] : styles.btn
        }
        iconStyle={styles.image}
        icon={item.source}
      />
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <>
      <View style={[styles.header, {height: getHeaderHeight()}]}>
        <LeftButton
          extraSource={require('src/assets/images/arrow-left-white.png')}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={({item}) => renderMenuItem(handlePress, item, activeId)}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.content}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-end',
    backgroundColor: COLORS.GREY_DARKER,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.GREY_DARKER,
  },
  itemContainer: {
    alignItems: 'center',
  },
  btn: {
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: COLORS.BTN_DRAWER,
    marginVertical: 15,
  },
  activeBtn: {
    backgroundColor: COLORS.TURQUOISE,
  },
  image: {
    alignSelf: 'center',
  },
  content: {
    paddingBottom: 20,
  },
});
