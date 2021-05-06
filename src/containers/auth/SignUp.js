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

export const SignUp = ({navigation}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
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
            source={require('src/assets/images/signUp.png')}
            style={styles.image}
          />
          <Input placeholder="Enter email" keyboardType="email-address" />
          <Input
            placeholder="Enter password"
            keyboardType="number-pad"
            icon={visiblePassword ? 'eye' : 'eye-closed'}
            onIconPress={handlePasswordVisibility}
            secureTextEntry={!visiblePassword}
            textContentType="password"
          />
          <Input
            placeholder="Confirm password"
            keyboardType="number-pad"
            icon={visiblePassword ? 'eye' : 'eye-closed'}
            onIconPress={handlePasswordVisibility}
            secureTextEntry={!visiblePassword}
            textContentType="password"
          />
          <Button
            onPress={() => {
              navigation.navigate(ROUTES.APP);
            }}
            text="Sign Up"
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
          <Row style={styles.choiceContainer}>
            <Text content="Already have an account?" />
            <Button
              theme="noBorder"
              text="Sign In"
              extraTextStyles={styles.orangeText}
              extraStyles={styles.noBorderBtn}
              onPress={() => {
                navigation.navigate(ROUTES.SIGN_IN);
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
    width: 140,
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
});
