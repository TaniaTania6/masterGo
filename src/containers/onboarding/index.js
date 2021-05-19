import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Text, Button} from 'src/components';
import {COLORS, ROUTES} from 'src/constants';
import {dimensions} from 'src/styles';
import {
  checkAndroidLocationPermission,
  checkAndroidReadContactsPermission,
} from 'src/utils/permissions';
import {Plus} from 'src/assets/svg';

const AUTOPLAY_DELAY = 3000;

const slides = [
  {
    source: require('src/assets/images/slide1.png'),
    title: 'Proven\n specialists',
    text: 'We check each specialist before he starts work',
  },
  {
    source: require('src/assets/images/slide2.png'),
    title: 'Honest\n ratings',
    text: 'We carefully check each specialist and put honest ratings',
  },
  {
    source: require('src/assets/images/slide3.png'),
    title: 'Insured\n orders',
    text: 'We insure each order for the amount of $500',
  },
  {
    source: require('src/assets/images/slide4.png'),
    title: 'Create\n order',
    text: "It's easy, just click on the plus",
  },
];

export const Onboarding = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTitle, setActiveTitle] = useState(slides[activeSlide].title);
  const [activeText, setActiveText] = useState(slides[activeSlide].text);
  const [activeSource, setActiveSource] = useState(slides[activeSlide].source);
  useEffect(() => {
    checkAndroidLocationPermission();
  }, []);

  const insets = useSafeAreaInsets();

  const renderSlide = ({index}) => {
    return (
      <View style={styles.slideContainer}>
        <View key={index} style={styles.flexContainer}>
          <Text
            extraStyles={styles.textStyles}
            fontVariant="title"
            fontWeight="medium"
            title>
            {activeTitle}
          </Text>
          <Image source={activeSource} style={styles.image} />
        </View>
        <Text>{activeText}</Text>
      </View>
    );
  };

  const handlerSnapToItem = idx => {
    setActiveSlide(idx);
    setActiveTitle(slides[idx].title);
    setActiveText(slides[idx].text);
    setActiveSource(slides[idx].source);
  };

  const handleButtonPress = () => {
    activeSlide === 3
      ? navigation.navigate(ROUTES.AUTH)
      : handlerSnapToItem(activeSlide + 1);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Carousel
          data={slides}
          renderItem={renderSlide}
          sliderWidth={dimensions.windowWidth}
          itemWidth={dimensions.windowWidth}
          autoplayDelay={AUTOPLAY_DELAY}
          inactiveSlideOpacity={1}
          activeSlideOffset={0}
          inactiveSlideScale={1}
          removeClippedSubviews={false}
          onSnapToItem={handlerSnapToItem}
        />
        <Pagination
          dotsLength={slides.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.7}
        />
      </View>
      {activeSlide === 3 ? (
        <Button
          onPress={handleButtonPress}
          extraStyles={{marginBottom: insets.bottom + 20}}
          theme="circle"
          icon={Plus}
          iconStyle={styles.plusButton}
        />
      ) : (
        <Button
          onPress={handleButtonPress}
          extraStyles={{marginBottom: insets.bottom + 20}}>
          Next
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 60,
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 8,
    backgroundColor: COLORS.GREY_LIGHT,
  },
  plusButton: {
    color: COLORS.WHITE,
    lineHeight: 19,
  },
  textStyles: {
    marginBottom: 40,
  },
  image: {
    width: 180,
    height: dimensions.windowHeight < 700 ? 250 : 300,
  },
});
