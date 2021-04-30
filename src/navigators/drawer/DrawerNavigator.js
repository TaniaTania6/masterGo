import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, Categories} from 'src/containers';
import {DrawerContent} from 'src/navigators/drawer/DrawerContent';
import {HomeScreenNavigator, CategoriesNavigator} from 'src/navigators/stack';
import {
  RightButton,
  LeftButton,
  stylesHeaderText,
} from 'src/navigators/options';
import {ROUTES, COLORS} from 'src/constants';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={() => <DrawerContent />}>
    <Drawer.Screen name={ROUTES.HOMESCREEN} component={HomeScreenNavigator} />
    <Drawer.Screen name={ROUTES.CATEGORIES} component={CategoriesNavigator} />
  </Drawer.Navigator>
);
