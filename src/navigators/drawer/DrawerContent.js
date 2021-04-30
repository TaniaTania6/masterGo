import React, {useState} from 'react';
import {Image, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, TextComponent} from 'src/components';
import {COLORS, ROUTES} from 'src/constants';

const items = [
  {
    id: 1,
    content: 'Home',
    source: require('src/assets/images/drawer-images/1.png'),
    route: ROUTES.HOMESCREEN,
  },
  {
    id: 2,
    content: 'Categories',
    source: require('src/assets/images/drawer-images/2.png'),
    route: ROUTES.CATEGORIES,
  },
  {
    id: 3,
    content: 'Notifications',
    source: require('src/assets/images/drawer-images/4.png'),
    route: ROUTES.NOTIFICATIONS,
  },
];

const renderMenuItem = (onPress, item, activeId) => (
  <>
    <Button
      onPress={() => onPress(item)}
      style={
        activeId === item.id ? [styles.btn, styles.activeBtn] : styles.btn
      }>
      <Image source={item.source} style={styles.image} />
    </Button>
    <TextComponent content={item.content} />
  </>
);

export const DrawerContent = () => {
  const navigation = useNavigation();
  const [activeId, setActiveId] = useState(1);

  const handlePress = ({id, route}) => {
    setActiveId(id);
    navigation.navigate(route);
  };

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
    justifyContent: 'center',
    backgroundColor: COLORS.GREY_DARK,
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
