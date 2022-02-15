module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  resolver: '<rootDir>/../../jest-resolver.js',
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/__testFixtures__/',
    '<rootDir>/__tests__/utils/',
  ],
};
