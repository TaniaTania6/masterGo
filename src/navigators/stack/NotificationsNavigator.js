import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {headerOptionsFull} from 'src/navigators/options';
import {Notifications} from 'src/containers';
import {ROUTES} from 'src/constants';
import {toUpperFirstSign} from 'src/utils/formatters';

const Stack = createStackNavigator();

export const NotificationsNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      ...headerOptionsFull,
      headerTitle: toUpperFirstSign(route.name),
    })}>
    <Stack.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
  </Stack.Navigator>
);
