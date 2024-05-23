module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-proposal-private-property-in-object',
    '@babel/plugin-proposal-class-properties',
    'react-native-reanimated/plugin',
  ],
};
