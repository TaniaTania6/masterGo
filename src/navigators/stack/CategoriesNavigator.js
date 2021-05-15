import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Categories} from 'src/containers';
import {RightButton, LeftButton, styles} from 'src/navigators/options';

import {COLORS, ROUTES} from 'src/constants';
import {toUpperFirstSign} from 'src/utils/formatters';

const Stack = createStackNavigator();

export const CategoriesNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={({route}) => ({
      headerStyle: styles.headerStyle,
      headerLeft: LeftButton,
      headerRight: RightButton,
      headerTintColor: COLORS.GREY_DARKER,
      headerTitleStyle: styles.headerText,
      headerTitleAlign: 'center',
      headerTitle: toUpperFirstSign(route.name),
    })}>
    <Stack.Screen name={ROUTES.CATEGORIES} component={Categories} />
  </Stack.Navigator>
);
