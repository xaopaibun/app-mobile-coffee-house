module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          contexts: './src/contexts',
          containers: './src/containers',
          services: './src/services',
          hooks: './src/hooks',
          navigations: './src/navigations',
          screens: './src/screens',
          types: './src/types',
          utils: './src/utils',
          store: './src/store.ts',
        },
      },
    ],
  ],
};
