import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignUp} from 'src/containers';
import {styles} from 'src/navigators/options';

import {COLORS, ROUTES} from 'src/constants';
import {getCapitalizedText} from 'src/utils/formatters';

const Stack = createStackNavigator();

export const AuthStackNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={({route}) => ({
      headerStyle: styles.headerStyle,
      headerLeft: null,
      headerTintColor: COLORS.GREY_DARKER,
      headerTitleStyle: styles.headerText,
      headerTitleAlign: 'center',
      headerTitle: getCapitalizedText(route.name),
    })}>
    <Stack.Screen name={ROUTES.SIGN_IN} component={SignIn} />
    <Stack.Screen name={ROUTES.SIGN_UP} component={SignUp} />
  </Stack.Navigator>
);
