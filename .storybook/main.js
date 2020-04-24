const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.visual.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            // https://github.com/styleguidist/react-docgen-typescript#parseroptions
            propFilter: (prop, component) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules');
              }

              return true;
            },
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    // 临时关闭构建的类型检查，等待补全后打开
    if (configType === 'development') {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    const temp = config.resolve.alias;
    config.resolve.alias = {
      ...temp,
      src: path.join(__dirname, '../src'),
      utils: path.join(__dirname, '../utils'),
      assets: path.join(__dirname, '../assets'),
    };
    return config;
  },
};
