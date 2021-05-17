import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomerInfo} from 'src/containers';
import {headerOptionsFull} from 'src/navigators/options';
import {getLowercaseText} from 'src/utils/formatters';
import {ROUTES} from 'src/constants';

const Stack = createStackNavigator();
export const CustomerInfoNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      ...headerOptionsFull,
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen name={ROUTES.CUSTOMER_INFO} component={CustomerInfo} />
  </Stack.Navigator>
);
