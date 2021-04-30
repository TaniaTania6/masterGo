import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextComponent, Button} from 'src/components';

import {COLORS} from 'src/constants';

export const HalfButtons = ({content1, content2}) => {
  return (
    <View style={styles.btnContainer}>
      <Button style={[styles.halfBtn, styles.primaryColor]}>
        <TextComponent content={content1} extraStyles={styles.greyText} />
      </Button>
      <Button style={styles.halfBtn}>
        <TextComponent content={content2} extraStyles={styles.whiteText} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfBtn: {
    width: '48%',
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
  },
  greyText: {
    color: COLORS.GREY_LIGHT,
  },
  whiteText: {
    color: COLORS.WHITE,
  },
  primaryColor: {
    backgroundColor: COLORS.PRIMARY,
  },
});
