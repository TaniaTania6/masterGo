import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {OnboardingOne} from 'src/containers/onboarding/';

import {ROUTES} from 'src/constants';

const Stack = createStackNavigator();

export const OnboardingNavigator = () => (
  <Stack.Navigator screenOptions={{headerTitle: ''}}>
    <Stack.Screen
      name={ROUTES.ONBOARDING_ONE}
      component={OnboardingOne}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
