import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Categories} from 'src/containers';
import {
  RightButtonDISABLED,
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
      headerRight: RightButtonDISABLED,
      headerTintColor: COLORS.GREY_DARK,
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
