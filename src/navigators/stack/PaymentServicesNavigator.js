import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PaymentServices} from 'src/containers';
import {ROUTES, COLORS} from 'src/constants';
import {getLowercaseText} from 'src/utils/formatters';
import {LeftButton, RightButton, styles} from '../options';

const Stack = createStackNavigator();

export const PaymentServicesNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      headerRight: RightButton,
      headerLeft: LeftButton,
      headerTintColor: COLORS.GREY_DARKER,
      headerStyle: {backgroundColor: COLORS.PRIMARY},
      headerTitleStyle: styles.headerText,
      headerTitleAlign: 'center',
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen
      name={ROUTES.PAYMENT_FOR_SERVICES}
      component={PaymentServices}
    />
  </Stack.Navigator>
);
