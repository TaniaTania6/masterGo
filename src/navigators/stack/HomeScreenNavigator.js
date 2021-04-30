import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'src/containers';
import {
  RightButton,
  LeftButton,
  stylesHeaderText,
} from 'src/navigators/options';

import {COLORS, ROUTES} from 'src/constants';

const Stack = createStackNavigator();

export const HomeScreenNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerStyle: {backgroundColor: COLORS.PRIMARY},
      headerBackImage: LeftButton,
      headerRight: RightButton,
      // headerTintColor: COLORS.GREY_DARK,
      // headerTitleStyle: stylesHeaderText,
      // headerTitleAlign: 'center',
    }}>
    <Stack.Screen
      name={ROUTES.HOMESCREEN}
      component={HomeScreen}
      options={{
        headerTitle: '',
      }}
    />
  </Stack.Navigator>
);
