import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {OnBoardingText, Button} from 'src/components';
import {COLORS} from 'src/constants';

const {width: WINDOW_WIDTH} = Dimensions.get('window');
const {height: WINDOW_HEIGHT} = Dimensions.get('window');

const AUTOPLAY_DELAY = 3000;

const slides = [
  {
    source: require('src/assets/images/slide1.png'),
    title: 'Proven specialists',
    text: 'We check each specialist before he starts work',
  },
  {
    source: require('src/assets/images/slide2.png'),
    title: 'Honest\n ratings',
    text: 'We carefully check each specialist and put honest ratings',
  },
  {
    source: require('src/assets/images/slide3.png'),
    title: 'Insured orders',
    text: 'We insure each order for the amount of $500',
  },
  {
    source: require('src/assets/images/slide4.png'),
    title: 'Create order',
    text: "It's easy, just click on the plus",
  },
];

export const OnboardingOne = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTitle, setActiveTitle] = useState(slides[activeSlide].title);
  const [activeText, setActiveText] = useState(slides[activeSlide].text);
  const [activeSource, setActiveSource] = useState(slides[activeSlide].source);

  const insets = useSafeAreaInsets();

  const renderSlide = ({index}) => (
    <View style={styles.slideContainer}>
      <View key={index} style={{flex: 1}}>
        <OnBoardingText
          text={activeTitle}
          extraStyles={{marginBottom: 60}}
          bigFormat
        />
        <Image
          source={activeSource}
          style={{
            width: 180,
            height: WINDOW_HEIGHT < 700 ? 250 : 300,
          }}
        />
      </View>
      <OnBoardingText text={activeText} />
    </View>
  );

  const handlerSnapToItem = idx => {
    setActiveSlide(idx);
    setActiveTitle(slides[idx].title);
    setActiveText(slides[idx].text);
    setActiveSource(slides[idx].source);
  };

  const handleBtnPress = () => {
    activeSlide === 3
      ? handlerSnapToItem(0)
      : handlerSnapToItem(activeSlide + 1);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Carousel
          data={slides}
          renderItem={renderSlide}
          sliderWidth={WINDOW_WIDTH}
          itemWidth={WINDOW_WIDTH}
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
          // dotContainerStyle={styles.paginationDotContainer}
          // containerStyle={styles.paginationContainer}
          inactiveDotOpacity={0.4}
          // inactiveDotColor={COLORS.TURQUOISE}
          inactiveDotScale={0.7}
        />
      </View>
      <Button
        onPress={handleBtnPress}
        style={{marginBottom: insets.bottom + 20}}>
        <Text>Next</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    // alignItems: 'center'
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'pink',
    marginHorizontal: 50,
    marginTop: 60,
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 8,
    backgroundColor: COLORS.PAGINATION_POINT_ACTIVE,
  },
});
