import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView as KeyboardAwareScrollViewNative} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from 'src/constants';
import {dimensions} from 'src/styles';

export const KeyboardAwareScrollView = ({children, style}) => {
  const insets = useSafeAreaInsets();

  const getPaddingBottom = () => {
    /*
     * On Android KeyboardAwareScrollView ignore paddingBottom, so
     * to add additional space we use such workaround. There is
     * no fix so far.
     */
    return (
      <View
        style={{
          paddingBottom: insets.bottom || dimensions.VERTICAL_PADDING,
        }}
      />
    );
  };

  return (
    <KeyboardAwareScrollViewNative
      contentContainerStyle={[styles.container, style]}
      bounces={false}
      overScrollMode="never"
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}
      // extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
      enableAutomaticScroll
      enableOnAndroid>
      {children}
      {getPaddingBottom()}
    </KeyboardAwareScrollViewNative>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingTop: dimensions.VERTICAL_PADDING,
    paddingHorizontal: dimensions.HORIZONTAL_PADDING,
  },
});
