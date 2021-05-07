import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView, Row, Text, Button} from 'src/components';
import {COLORS} from 'src/constants';

const items = [
  {
    name: 'Balcony repair',
    price: '$24',
    icon: require('src/assets/images/orders-balcony.png'),
  },
  {
    name: 'Redecorating',
    price: '$60',
    icon: require('src/assets/images/orders-redecorating.png'),
  },
  {
    name: 'Painting works',
    price: '$42',
    icon: require('src/assets/images/orders-painting.png'),
  },
  {
    name: 'Interior design',
    price: '$54',
    icon: require('src/assets/images/orders-design.png'),
  },
  {
    name: 'Sculpture',
    price: '$42',
    icon: require('src/assets/images/orders-sculpture.png'),
  },
  {
    name: 'Stairs',
    price: '$54',
    icon: require('src/assets/images/orders-stairs.png'),
  },
];

export const OrdersInProgress = () => {
  return (
    <>
      <KeyboardAwareScrollView>
        <View>
          <Row style={styles.container}>
            {items.map((item, index) => (
              <View
                key={index}
                style={
                  index === 2
                    ? {alignSelf: 'flex-end'}
                    : {alignSelf: 'flex-start'}
                }>
                <Image source={item.icon} />
                <Text content={item.name} />
                <Text content={item.price} />
              </View>
            ))}
          </Row>
        </View>
      </KeyboardAwareScrollView>
      <Row style={styles.btnContainer}>
        <Button
          extraStyles={styles.transparentBtn}
          extraTextStyles={styles.greyText}
          text="Archive"
          theme="small"
        />
        <Button
          extraStyles={styles.turquoiseColor}
          text="Reviews"
          theme="small"
        />
      </Row>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  turquoiseColor: {
    backgroundColor: COLORS.TURQUOISE,
  },
  transparentBtn: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: 'transparent',
  },
  btnContainer: {
    marginHorizontal: '8%',
  },
});
