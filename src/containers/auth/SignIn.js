import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import {
  Input,
  Button,
  Text,
  Row,
  KeyboardAwareScrollView,
} from 'src/components';
import {COLORS, ROUTES} from 'src/constants';

export const SignIn = ({navigation}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleNavigate = route => {
    navigation.navigate(route);
  };
  const handlePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.select({ios: 'padding', default: undefined})}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
            source={require('src/assets/images/signIn.png')}
            style={styles.image}
          />
          <Input placeholder="Username" textContentType="name" />
          <Input
            placeholder="Password"
            keyboardType="number-pad"
            icon={visiblePassword ? 'eye' : 'eye-closed'}
            onIconPress={handlePasswordVisibility}
            secureTextEntry={!visiblePassword}
            textContentType="password"
          />
          <Text extraStyles={styles.forgotLine}>Forgot your password?</Text>
          <Button
            onPress={() => {
              handleNavigate(ROUTES.APP);
            }}
            text="Login"
          />
          <Text>or</Text>
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
          <Row style={styles.choiceContainer}>
            <Text>Don't have an account?</Text>
            <Button
              theme="noBorder"
              text="Sign Up"
              extraStyles={styles.noBorderBtn}
              onPress={() => {
                handleNavigate(ROUTES.SIGN_UP);
              }}
            />
          </Row>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
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
  noBorderBtn: {
    marginLeft: 10,
  },
  forgotLine: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});
