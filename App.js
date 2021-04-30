/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigator} from 'src/navigators';
import {COLORS} from 'src/constants';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={COLORS.PRIMARY} translucent />
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
