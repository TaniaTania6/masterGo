import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from 'src/constants';
import {ConstructionWorks} from 'src/containers';
import {headerOptionsFull} from 'src/navigators/options';
import {getLowercaseText} from 'src/utils/formatters';

const Stack = createStackNavigator();

export const ConstructionNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={({route}) => ({
      ...headerOptionsFull,
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen
      name={ROUTES.CONSTRUCTION_WORKS}
      component={ConstructionWorks}
    />
  </Stack.Navigator>
);
