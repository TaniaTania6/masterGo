import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES, COLORS} from 'src/constants';
import {OrdersInProgress} from 'src/containers';
import {getLowercaseText} from 'src/utils/formatters';
import {
  LeftButton,
  RightButton,
  stylesHeaderText,
} from 'src/navigators/options';

const Stack = createStackNavigator();

export const OrdersNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      headerLeft: LeftButton,
      headerRight: RightButton,
      headerTintColor: COLORS.GREY_DARKER,
      headerTitleStyle: stylesHeaderText,
      headerTitleAlign: 'center',
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen
      name={ROUTES.ORDERS_IN_PROGRESS}
      component={OrdersInProgress}
    />
  </Stack.Navigator>
);
