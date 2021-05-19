import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Categories} from 'src/containers';
import {headerOptionsFull} from 'src/navigators/options';

import {ROUTES} from 'src/constants';
import {toUpperFirstSign} from 'src/utils/formatters';

const Stack = createStackNavigator();

export const CategoriesNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={({route}) => ({
      ...headerOptionsFull,
      headerTitle: toUpperFirstSign(route.name),
    })}>
    <Stack.Screen name={ROUTES.CATEGORIES} component={Categories} />
  </Stack.Navigator>
);
