import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from 'src/navigators/drawer/DrawerContent';
import {
  HomeScreenNavigator,
  CategoriesNavigator,
  NotificationsNavigator,
  OrdersNavigator,
  ConstructionNavigator,
  PaymentServicesNavigator,
  CustomerInfoNavigator,
} from 'src/navigators/stack';
import {ROUTES} from 'src/constants';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={() => <DrawerContent />}>
    <Drawer.Screen name={ROUTES.HOMESCREEN} component={HomeScreenNavigator} />
    <Drawer.Screen name={ROUTES.CATEGORIES} component={CategoriesNavigator} />
    <Drawer.Screen
      name={ROUTES.NOTIFICATIONS}
      component={NotificationsNavigator}
    />
    <Drawer.Screen
      name={ROUTES.ORDERS_IN_PROGRESS}
      component={OrdersNavigator}
    />
    <Drawer.Screen
      name={ROUTES.CONSTRUCTION_WORKS}
      component={ConstructionNavigator}
    />
    <Drawer.Screen
      name={ROUTES.PAYMENT_FOR_SERVICES}
      component={PaymentServicesNavigator}
    />
    <Drawer.Screen
      name={ROUTES.CUSTOMER_INFO}
      component={CustomerInfoNavigator}
    />
  </Drawer.Navigator>
);
