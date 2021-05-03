import React, {useState} from 'react';
import {FlatList, StyleSheet, SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'src/components';
import {COLORS, ROUTES} from 'src/constants';

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
];

export const DrawerContent = () => {
  const navigation = useNavigation();
  const [activeId, setActiveId] = useState(1);

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
      <Text content={item.content} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => renderMenuItem(handlePress, item, activeId)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
});
