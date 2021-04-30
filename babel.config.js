module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-syntax-throw-expressions'],
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        extensions: ['.js'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
};
