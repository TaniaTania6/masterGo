import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Categories} from 'src/containers';
import {
  RightButton,
  LeftButton,
  stylesHeaderText,
} from 'src/navigators/options';

import {COLORS, ROUTES} from 'src/constants';

const Stack = createStackNavigator();

export const CategoriesNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerStyle: {backgroundColor: COLORS.PRIMARY},
      headerBackImage: LeftButton,
      headerRight: RightButton,
      headerTintColor: COLORS.GREY_DARKER,
      headerTitleStyle: stylesHeaderText,
      headerTitleAlign: 'center',
    }}>
    <Stack.Screen
      name={ROUTES.CATEGORIES}
      component={Categories}
      options={{
        headerTitle: 'Categories',
      }}
    />
  </Stack.Navigator>
);
