import React, {useState, useMemo} from 'react';
import {FlatList, Image, View, StyleSheet} from 'react-native';
import {Row, Text, Button} from 'src/components';
import {COLORS} from 'src/constants';
import {dimensions} from 'src/styles';

const items = [
  {
    img: require('src/assets/images/welding-works.png'),
    content: 'Welding works',
    price: '$40',
  },
  {
    img: require('src/assets/images/foundation-works.png'),
    content: 'Foundation works',
    price: '$55',
  },
  {
    img: require('src/assets/images/waterproofing.png'),
    content: 'Waterproofing',
    price: '$20',
  },
];
export const PaymentServices = () => {
  const [data, setData] = useState(items);
  const memorizedSum = useMemo(() => {
    let result = 0;
    data.forEach(item => {
      result += Number(item.price.slice(1));
    });
    return result;
  }, [data]);
  const renderService = ({item}) => (
    <Row style={styles.row}>
      <Image source={item.img} style={styles.image} />
      <Text>{item.content}</Text>
      <Text extraStyles={styles.price} title>
        {item.price}
      </Text>
    </Row>
  );

  const renderFooter = () => (
    <View>
      <View style={styles.separator} />
      <Row>
        <Text content="Total" />
        <Text content={`$${memorizedSum}`} />
      </Row>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderService}
        keyExtractor={item => item.content}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={styles.footerStyles}
      />
      <Button text="Checkout" />
      <Button text="Continue Shopping" theme="noBorder" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: dimensions.VERTICAL_PADDING,
    paddingHorizontal: dimensions.HORIZONTAL_PADDING,
  },
  image: {
    height: '100%',
    width: '15%',
    marginRight: '5%',
  },
  price: {
    fontSize: 24,
    flexGrow: 1,
    textAlign: 'right',
  },
  row: {
    marginBottom: '5%',
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.GRIZZLE,
    marginBottom: 25,
  },
  footerStyles: {
    marginTop: 40,
  },
});
