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
import {ROUTES} from 'src/constants';
import {Linkedin, Twitter, Facebook} from 'src/assets/svg';

export const SignIn = ({navigation}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleNavigate = route => () => {
    navigation.navigate(route);
  };
  const handlePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };
  const handleLinkOpening = link => () => {
    Linking.openURL(link);
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
          <Button onPress={handleNavigate(ROUTES.APP)}>Login</Button>
          <Text>or</Text>
          <Row style={styles.buttonContainer}>
            <Button
              theme="social"
              icon={Facebook}
              onPress={handleLinkOpening('https://www.facebook.com/')}
            />
            <Button
              theme="social"
              icon={Twitter}
              onPress={handleLinkOpening('https://www.twitter.com/')}
            />
            <Button
              theme="social"
              icon={Linkedin}
              onPress={handleLinkOpening('https://www.linkedin.com/')}
            />
          </Row>
          <Row style={styles.choiceContainer}>
            <Text>Don't have an account?</Text>
            <Button
              theme="plain"
              extraStyles={styles.plainButton}
              onPress={handleNavigate(ROUTES.SIGN_UP)}>
              Sign Up
            </Button>
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
  buttonContainer: {
    width: '100%',
  },
  choiceContainer: {
    marginTop: 10,
  },
  plainButton: {
    marginLeft: 10,
  },
  forgotLine: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});
