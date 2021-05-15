import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CustomerInfo} from 'src/containers';
import {LeftButton, RightButton, styles} from 'src/navigators/options';
import {getLowercaseText} from 'src/utils/formatters';
import {ROUTES, COLORS} from 'src/constants';

const Stack = createStackNavigator();
export const CustomerInfoNavigator = () => (
  <Stack.Navigator
    screenOptions={({route}) => ({
      headerStyle: styles.headerStyle,
      headerLeft: LeftButton,
      headerRight: RightButton,
      headerTintColor: COLORS.GREY_DARKER,
      headerTitleStyle: styles.headerText,
      headerTitleAlign: 'center',
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen name={ROUTES.CUSTOMER_INFO} component={CustomerInfo} />
  </Stack.Navigator>
);
