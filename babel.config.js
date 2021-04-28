module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-syntax-throw-expressions'],
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.json', 'ts', 'tsx'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
};
