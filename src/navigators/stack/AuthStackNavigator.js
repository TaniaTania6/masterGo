import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignUp} from 'src/containers';
import {
  RightButtonDISABLED,
  LeftButton,
  stylesHeaderText,
} from 'src/navigators/options';

import {COLORS, ROUTES} from 'src/constants';

const Stack = createStackNavigator();

export const AuthStackNavigator = () => (
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
      name={ROUTES.SIGN_IN}
      component={SignIn}
      options={{
        headerTitle: 'Sign In',
      }}
    />
    <Stack.Screen
      name={ROUTES.SIGN_UP}
      component={SignUp}
      options={{
        headerTitle: 'Sign Up',
      }}
    />
  </Stack.Navigator>
);
