import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {AirbnbRating} from 'react-native-ratings';
import {Text, Row, Button} from 'src/components';
import {dimensions} from 'src/styles';
import {COLORS} from 'src/constants';

const IMG_SIDE = 57;
const STAR_IMAGE = require('src/assets/images/star.png');

const data = [
  {
    img: require('src/assets/images/customer-info-door.png'),
  },
  {
    img: require('src/assets/images/customer-info-chair.png'),
  },
  {
    img: require('src/assets/images/customer-info-roof.png'),
  },
  {
    img: require('src/assets/images/customer-info-wall.png'),
  },
];

const shortDetailsContent =
  'I have been working in this position for over 10 years! I have created many design solutions and I think my main best quality is creativity. If you liked my work, please contact me and see the professionalism and quality of my services.';

export const CustomerInfo = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSource, setActiveSource] = useState(data[activeSlide].img);
  const [detailsContent, setDetailsContent] = useState(shortDetailsContent);
  const [isLoader, setIsLoader] = useState(true);

  const handlePress = index => {
    setActiveSlide(index);
    setActiveSource(data[index].img);
  };
  const changeTextVolume = () => {
    setDetailsContent(detailsContent.repeat(3));
  };
  const renderItem = () => {
    return (
      <>
        <View>
          {/* {isLoader ? (
            <ActivityIndicator size="large" color={COLORS.ORANGE} />
          ) : ( */}
            <Image
              source={activeSource}
              style={styles.slideImage}
              onLoad={() => setIsLoader(false)}
            />
          {/* )} */}
        </View>
      </>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text extraStyles={styles.title} title>
        Portfolio
      </Text>
      <Text extraStyles={styles.text}>
        The last completed works of the contractor are shown below.
      </Text>
      <Row>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={dimensions.windowWidth}
          itemWidth={dimensions.windowWidth}
          inactiveSlideOpacity={0}
          activeSlideOffset={0}
          onSnapToItem={handlePress}
        />
        <View>
          {data.map((item, index) => (
            <TouchableOpacity onPress={() => handlePress(index)} key={index}>
              <Image source={item.img} style={styles.sideImage} />
            </TouchableOpacity>
          ))}
        </View>
      </Row>
      <View style={styles.rating}>
        <AirbnbRating
          count={5}
          reviews={STAR_IMAGE}
          selectedColor={COLORS.ORANGE}
          unSelectedColor={COLORS.STAR}
          defaultRating={4}
          size={16}
        />
      </View>
      <View>
        <Text extraStyles={[styles.title, styles.detailsTitle]} title>
          Details
        </Text>
        <Text extraStyles={[styles.text, styles.detailsText]}>
          {detailsContent}
        </Text>
        <Button
          text="Read more"
          theme="noBorder"
          extraStyles={styles.button}
          onPress={changeTextVolume}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: dimensions.HORIZONTAL_PADDING,
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 15,
  },
  detailsText: {
    marginTop: 15,
    marginBottom: 10,
  },
  detailsTitle: {
    marginTop: 50,
  },
  slideImage: {
    width: '65%',
    height: IMG_SIDE * 4,
  },
  sideImage: {
    width: IMG_SIDE,
    height: IMG_SIDE,
  },
  rating: {
    alignItems: 'flex-start',
    height: '3%',
  },
  button: {
    alignItems: 'flex-start',
  },
});
