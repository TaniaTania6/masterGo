import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from 'src/constants';
import {OrdersInProgress} from 'src/containers';
import {getLowercaseText} from 'src/utils/formatters';
import {headerOptionsFull} from 'src/navigators/options';

const Stack = createStackNavigator();

export const OrdersNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      ...headerOptionsFull,
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen
      name={ROUTES.ORDERS_IN_PROGRESS}
      component={OrdersInProgress}
    />
  </Stack.Navigator>
);
