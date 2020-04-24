module.exports = {
  // preset: 'ts-jest',
  // testEnvironment: 'node',
  transform: {
    // @storybook/addon-storyshots 和 ts-jest 似乎无法共用，这里使用 babel 临时代替
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    // 需要放置在 ^assets/(.*) 前面，优先匹配
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/assetsTransformer.js',
    '^src/(.*)': '<rootDir>/src/$1',
    '^utils/(.*)': '<rootDir>/utils/$1',
    '^assets/(.*)': '<rootDir>/assets/$1',
    '\\.(css|less)$': '<rootDir>/scripts/assetsTransformer.js',
  },
};
