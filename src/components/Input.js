import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  TextInput as NativeTextInput,
} from 'react-native';
import {COLORS} from 'src/constants';
import {Eye, EyeClosed, Search} from 'src/assets/svg';

const ICON_HORIZONTAL_PADDING = 20;
const ICON_LEFT_PADDING = 40;
const ICON_WIDTH = 18;
const ICON_HEIGHT = 20;

const icons = {
  'eye-closed': EyeClosed,
  eye: Eye,
  search: Search,
};

export const Input = ({icon, onIconPress, ...props}) => {
  const renderIcon = () => (
    <Pressable
      onPress={onIconPress}
      style={icon !== 'search' ? styles.icon : [styles.icon, styles.leftIcon]}>
      {React.createElement(icons[icon], {
        width: ICON_WIDTH,
        height: ICON_HEIGHT,
      })}
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          icon === 'search' && styles.iconLeftPadding,
        ]}>
        {icon === 'search' && icons[icon] && renderIcon()}
        <NativeTextInput
          style={[
            styles.textInput,
            !!icon && {
              paddingRight: ICON_HORIZONTAL_PADDING,
            },
          ]}
          placeholderTextColor={COLORS.GREY_DEEP}
          {...props}
        />
        {icon !== 'search' && icons[icon] && renderIcon()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
    backgroundColor: COLORS.GREY_LIGHTER,
  },
  textInput: {
    backgroundColor: COLORS.GREY_LIGHTER,
    fontFamily: 'B612-Regular',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    paddingLeft: 20,
    paddingVertical: 14,
  },
  icon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    paddingHorizontal: ICON_HORIZONTAL_PADDING,
    justifyContent: 'center',
    overflow: 'visible',
  },
  leftIcon: {
    left: 0,
    paddingHorizontal: ICON_HORIZONTAL_PADDING,
  },
  iconLeftPadding: {
    paddingLeft: ICON_LEFT_PADDING,
  },
});
