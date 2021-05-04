import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Input, Button, Text, Row} from 'src/components';
import {COLORS, ROUTES} from 'src/constants';

export const SignIn = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const handleNavigate = route => {
    navigation.navigate(route);
  };
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.select({ios: 'padding', default: 'height'})}>
      <View style={styles.container}>
        <Image
          source={require('src/assets/images/signIn.png')}
          style={styles.image}
        />
        <Input placeholder="Username" />
        <Input placeholder="Password" keyboardType="numeric" icon="eye" />
        <Text content="Forgot your password?" extraStyles={styles.forgotLine} />
        <Button
          onPress={() => {
            handleNavigate(ROUTES.APP);
          }}
          text="Login"
        />
        <Text content="or" />
        <Row style={styles.btnContainer}>
          <Button
            theme="social"
            icon={require('src/assets/images/social/facebook.png')}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}
          />
          <Button
            theme="social"
            icon={require('src/assets/images/social/twitter.png')}
            onPress={() => {
              Linking.openURL('https://www.twitter.com/');
            }}
          />
          <Button
            theme="social"
            icon={require('src/assets/images/social/linkedin.png')}
            onPress={() => {
              Linking.openURL('https://www.linkedin.com/');
            }}
          />
        </Row>
        <Row
          style={[styles.choiceContainer, {marginBottom: insets.bottom + 20}]}>
          <Text content="Don't have an account?" />
          <Button
            theme="noBorder"
            text="Sign Up"
            extraTextStyles={styles.orangeText}
            extraStyles={styles.noBorderBtn}
            onPress={() => {
              handleNavigate(ROUTES.SIGN_UP);
            }}
          />
        </Row>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 30,
    justifyContent: 'space-around',
  },
  screen: {
    flex: 1,
  },
  image: {
    height: 145,
    width: 100,
    marginBottom: 20,
  },
  textBtn: {
    color: COLORS.WHITE,
    lineHeight: 19,
  },
  btnContainer: {
    width: '100%',
  },
  choiceContainer: {
    marginTop: 10,
  },
  orangeText: {
    color: COLORS.ORANGE,
    textDecorationLine: 'underline',
  },
  noBorderBtn: {
    marginLeft: 10,
  },
  forgotLine: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
});
