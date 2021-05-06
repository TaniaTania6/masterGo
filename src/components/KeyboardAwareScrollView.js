import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView as KeyboardAwareScrollViewNative} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from 'src/constants';

const VERTICAL_PADDING = 40;
const HORIZONTAL_PADDING = 20;

export const KeyboardAwareScrollView = ({children, style}) => {
  const insets = useSafeAreaInsets();

  const getDummyView = () => {
    /*
     * On Android KeyboardAwareScrollView ignore paddingBottom, so
     * to add additional space we use such workaround. There is
     * no fix so far.
     */
    return (
      <View
        style={{
          paddingBottom: insets.bottom || VERTICAL_PADDING,
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
      {/* On Android KeyboardAwareScrollView ignore paddingBottom, so
				to add additional space we use such workaround. There is
				no fix so far.
			*/}
      {getDummyView()}
    </KeyboardAwareScrollViewNative>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.PRIMARY,
    paddingTop: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});
