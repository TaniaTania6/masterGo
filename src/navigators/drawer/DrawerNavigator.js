import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, Categories} from 'src/containers';
import {DrawerContent} from 'src/navigators/drawer/DrawerContent';
import {
  RightButton,
  LeftButton,
  stylesHeaderText,
} from 'src/navigators/options';
import {ROUTES, COLORS} from 'src/constants';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={() => <DrawerContent />}
    screenOptions={{
      headerStyle: {backgroundColor: COLORS.PRIMARY},
      headerBackImage: LeftButton,
      headerRight: RightButton,
      headerTintColor: COLORS.GREY_DARK,
      headerTitleStyle: stylesHeaderText,
      headerTitleAlign: 'center',
    }}>
    <Drawer.Screen name={ROUTES.HOMESCREEN} component={HomeScreen} />
    <Drawer.Screen name={ROUTES.CATEGORIES} component={Categories} />
  </Drawer.Navigator>
);
