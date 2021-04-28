import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator, OnboardingNavigator} from 'src/navigators/stack';

import {ROUTES} from 'src/constants';

const Stack = createStackNavigator();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={ROUTES.ONBOARDING}
        component={OnboardingNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={ROUTES.AUTH}
        component={AuthStackNavigator}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  </NavigationContainer>
);
