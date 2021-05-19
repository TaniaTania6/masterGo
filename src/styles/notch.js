// https://github.com/ptelad/react-native-iphone-x-helper#readme
import {Dimensions, Platform, StatusBar} from 'react-native';

const isIphoneX = () => {
  const {height, width} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
};

const ifIphoneX = (iphoneXStyle, regularStyle) =>
  isIphoneX() ? iphoneXStyle : regularStyle;

const getStatusBarHeight = safe =>
  Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });

const getBottomSpace = () => (isIphoneX() ? 34 : 0);

export default {
  isIphoneX,
  ifIphoneX,
  getStatusBarHeight,
  getBottomSpace,
};
