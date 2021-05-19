import {COLORS} from 'src/constants';
import {normalize} from 'src/styles';

const fontWeights = {
  normal: '400',
  medium: '500',
};

const fontVariants = {
  title: {
    fontSize: normalize(40),
    color: COLORS.GREY_DARKER,
  },
  subtitle: {
    fontSize: normalize(24),
    color: COLORS.GREY_DARKER,
  },
  body: {
    fontSize: normalize(18),
  },
  p: {
    fontSize: normalize(16),
    color: COLORS.GREY_DARK,
  },
  label: {
    fontSize: normalize(14),
    color: COLORS.GREY_DARK,
  },
};

export default {
  fontWeights,
  fontVariants,
};
