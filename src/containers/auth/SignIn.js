import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Input, Button, TextComponent} from 'src/components';
import {COLORS, ROUTES} from 'src/constants';

export const SignIn = ({navigation}) => {
  const insets = useSafeAreaInsets();
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
        <TextComponent
          content="Forgot your password?"
          extraStyles={styles.forgotLine}
        />
        <Button
          onPress={() => {
            navigation.navigate(ROUTES.APP);
          }}>
          <TextComponent content="Login" extraStyles={styles.textBtn} />
        </Button>
        <TextComponent content="or" />
        <View style={styles.btnContainer}>
          <Button style={styles.socialBtn}>
            <Image source={require('src/assets/images/social/1.png')} />
          </Button>
          <Button style={styles.socialBtn}>
            <Image source={require('src/assets/images/social/2.png')} />
          </Button>
          <Button style={styles.socialBtn}>
            <Image source={require('src/assets/images/social/3.png')} />
          </Button>
        </View>
        <View
          style={[styles.choiceContainer, {marginBottom: insets.bottom + 20}]}>
          <TextComponent content="Don't have an account?" />
          <Button
            style={styles.primaryColor}
            onPress={() => {
              navigation.navigate(ROUTES.SIGN_UP);
            }}>
            <TextComponent content="Sign" extraStyles={styles.orangeText} />
          </Button>
        </View>
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
