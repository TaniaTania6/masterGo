import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES, COLORS} from 'src/constants';
import {ConstructionWorks} from 'src/containers';
import {RightButton, LeftButton, styles} from 'src/navigators/options';
import {getLowercaseText} from 'src/utils/formatters';

const Stack = createStackNavigator();

export const ConstructionNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={({route}) => ({
      headerStyle: styles.headerStyle,
      headerLeft: LeftButton,
      headerRight: RightButton,
      headerTintColor: COLORS.GREY_DARKER,
      headerTitleStyle: styles.headerText,
      headerTitleAlign: 'center',
      headerTitle: getLowercaseText(route.name),
    })}>
    <Stack.Screen
      name={ROUTES.CONSTRUCTION_WORKS}
      component={ConstructionWorks}
    />
  </Stack.Navigator>
);
