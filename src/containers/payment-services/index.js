import React, {useState, useMemo} from 'react';
import {FlatList, Image, View, StyleSheet} from 'react-native';
import {Row, Text, Button} from 'src/components';
import {COLORS} from 'src/constants';

const VERTICAL_PADDING = 40;
const HORIZONTAL_PADDING = 30;

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
  const renderService = ({img, content, price}) => (
    <Row style={styles.row}>
      <Image source={img} style={styles.image} />
      <Text content={content} />
      <Text content={price} extraStyles={styles.price} bigFormat />
    </Row>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => renderService(item)}
        keyExtractor={item => item.content}
        ListFooterComponent={() => (
          <View>
            <View style={styles.separator} />
            <Row>
              <Text content="Total" />
              <Text content={`$${memorizedSum}`} />
            </Row>
          </View>
        )}
        ListFooterComponentStyle={styles.block}
      />

      <Button text="Checkout" />
      <Button text="Continue Shopping" theme="noBorder" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
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
  block: {
    marginTop: 40,
  },
});
