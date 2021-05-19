import {dimensions} from 'src/styles';

const compareScreenWidth = 375;

export const normalize = size => {
  const width =
    dimensions.windowHeight > dimensions.windowWidth
      ? dimensions.windowWidth
      : dimensions.windowHeight;
  return Math.round((size * width) / compareScreenWidth);
};
