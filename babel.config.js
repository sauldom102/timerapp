module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        useTransformReactJSXExperimental: true,
      },
    ],
  ],
  plugins: [
    'react-native-reanimated/plugin',
    //['module:react-native-dotenv'], // TODO This is incompatible with storyshots, use react-native-config instead which does not require a babel plugin
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@storybook-utils': './.storybook/utils',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
