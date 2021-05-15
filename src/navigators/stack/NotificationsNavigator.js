import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RightButton, LeftButton, styles} from 'src/navigators/options';
import {Notifications} from 'src/containers';
import {COLORS, ROUTES} from 'src/constants';
import {toUpperFirstSign} from 'src/utils/formatters';

const Stack = createStackNavigator();

export const NotificationsNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      headerStyle: styles.headerStyle,
      headerLeft: LeftButton,
      headerRight: RightButton,
      headerTintColor: COLORS.GREY_DARKER,
      headerTitleStyle: styles.headerText,
      headerTitleAlign: 'center',
      headerTitle: toUpperFirstSign(route.name),
    })}>
    <Stack.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
  </Stack.Navigator>
);
