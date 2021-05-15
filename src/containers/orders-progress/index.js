import React from 'react';
import {View, Image, FlatList, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Row, Text, Button} from 'src/components';
import {COLORS} from 'src/constants';
import {dimensions} from 'src/styles';

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
    type: 'small',
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
  const insets = useSafeAreaInsets();
  const renderItem = item => (
    <View style={[styles.block, item.type && styles.smallBlock]}>
      <Image source={item.icon} />
      <Text content={item.name} extraStyles={styles.title} />
      <Text content={item.price} />
    </View>
  );
  return (
    <>
      <ScrollView style={styles.container}>
        <FlatList
          data={items}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.name}
          numColumns={2}
        />
      </ScrollView>
      <Row
        style={[
          styles.btnContainer,
          {
            marginBottom: insets.bottom || dimensions.VERTICAL_PADDING,
          },
        ]}>
        <Button
          extraStyles={styles.transparentBtn}
          extraTextStyles={styles.greyText}
          text="Archive"
          theme="small"
        />
        <Button text="Reviews" theme="small" />
      </Row>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: dimensions.HORIZONTAL_PADDING,
  },
  row: {
    flexWrap: 'wrap',
  },
  transparentBtn: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: 'transparent',
  },
  btnContainer: {
    marginHorizontal: '8%',
  },
  greyText: {
    color: COLORS.GREY_DARK,
  },
  title: {
    paddingVertical: 5,
  },
  smallBlock: {
    alignSelf: 'flex-end',
  },
  block: {
    width: (dimensions.windowWidth - dimensions.HORIZONTAL_PADDING * 2) / 2,
    alignItems: 'center',
    marginBottom: 5,
  },
});
