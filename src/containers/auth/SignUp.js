import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Input, Button, Text} from 'src/components';
import {COLORS, ROUTES} from 'src/constants';

export const SignUp = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.select({ios: 'padding', default: 'height'})}>
      <View style={styles.container}>
        <Image
          source={require('src/assets/images/signUp.png')}
          style={styles.image}
        />
        <Input placeholder="Enter email" keyboardType="email-address" />
        <Input placeholder="Enter password" keyboardType="numeric" icon="eye" />
        <Input
          placeholder="Confirm password"
          keyboardType="numeric"
          icon="eye"
        />
        <Button
          onPress={() => {
            navigation.navigate(ROUTES.APP);
          }}>
          <Text content="Sign Up" extraStyles={styles.textBtn} />
        </Button>
        <Text content="or" />
        <View style={styles.btnContainer}>
          <Button style={styles.socialBtn}>
            <Image source={require('src/assets/images/social/facebook.png')} />
          </Button>
          <Button style={styles.socialBtn}>
            <Image source={require('src/assets/images/social/twitter.png')} />
          </Button>
          <Button style={styles.socialBtn}>
            <Image source={require('src/assets/images/social/linkedin.png')} />
          </Button>
        </View>
        <View
          style={[styles.choiceContainer, {marginBottom: insets.bottom + 20}]}>
          <Text content="Already have an account?" />
          <Button
            style={styles.primaryColor}
            onPress={() => {
              navigation.navigate(ROUTES.SIGN_IN);
            }}>
            <Text content="Sign In" extraStyles={styles.orangeText} />
          </Button>
        </View>
      </View>
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
    marginTop: 50,
    paddingHorizontal: 30,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialBtn: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    width: '32%',
    alignItems: 'center',
  },
  choiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  orangeText: {
    color: COLORS.ORANGE,
    textDecorationLine: 'underline',
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
    width: 'auto',
    marginLeft: 10,
  },
  forgotLine: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
});
