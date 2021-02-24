// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}', '!(src/**/*.stories.{js,jsx})'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'lcov'],
  // Commenting out the coverage threshold until we can get this up and running.
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  moduleNameMapper: {
    '.+\\.(png|svg|jpg|gif)$': 'identity-obj-proxy',
  },

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['node_modules/(?!(@ids))'],

  // Indicates whether each individual test should be reported during the run
  verbose: false,
};
