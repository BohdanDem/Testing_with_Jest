import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/react_app/src';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    `${baseDir}/**/*.{ts,tsx}`,
  ],
  testMatch: [
    `${baseDir}/**/*.test.tsx`,
    `${baseDir}/**/*.test.ts`,
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/app/react_app/src/setupTests.ts',
  ],
  testPathIgnorePatterns: [
    'App\\.test\\.tsx',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/app/react_app/tsconfig.json',
    },
  },
};

export default config;

