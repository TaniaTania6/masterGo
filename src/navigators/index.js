import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding} from 'src/containers';
import {AuthStackNavigator} from 'src/navigators/stack';
import {DrawerNavigator} from 'src/navigators/drawer';

import {ROUTES} from 'src/constants';

const Stack = createStackNavigator();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={ROUTES.AUTH} component={AuthStackNavigator} />
      <Stack.Screen name={ROUTES.APP} component={DrawerNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
