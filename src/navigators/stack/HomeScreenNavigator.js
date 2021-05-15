import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'src/containers';
import {RightButton, LeftButton, styles} from 'src/navigators/options';

import {ROUTES} from 'src/constants';

const Stack = createStackNavigator();

export const HomeScreenNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerStyle: styles.headerStyle,
      headerLeft: LeftButton,
      headerRight: RightButton,
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
