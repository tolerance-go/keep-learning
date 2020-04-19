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
    '^src/(.*)': '<rootDir>/src/$1',
    '^utils/(.*)': '<rootDir>/utils/$1',
    '^assets/(.*)': '<rootDir>/assets/$1',
  },
};
