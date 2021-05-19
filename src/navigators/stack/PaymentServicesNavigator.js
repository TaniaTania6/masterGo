import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PaymentServices} from 'src/containers';
import {ROUTES} from 'src/constants';
import {getLowercaseText} from 'src/utils/formatters';
import {headerOptionsFull} from '../options';

const Stack = createStackNavigator();

export const PaymentServicesNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      ...headerOptionsFull,
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen
      name={ROUTES.PAYMENT_FOR_SERVICES}
      component={PaymentServices}
    />
  </Stack.Navigator>
);
