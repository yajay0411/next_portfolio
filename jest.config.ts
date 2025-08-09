import nextJest from 'next/jest.js';
import type { Config } from 'jest';

// Create a function from next/jest to load Next.js config and env files
const createJestConfig = nextJest({
  dir: './', // Path to your Next.js project root
});

// Custom Jest configuration
const customJestConfig: Config = {
  // Runs after Jest environment is set up
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Simulate browser-like environment (needed for React components)
  testEnvironment: 'jest-environment-jsdom',

  // Path aliases (match your tsconfig.json "paths")
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Mock CSS modules
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock image imports
  },

  // Files to include for coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}', // Skip Storybook stories
    '!src/**/*.test.{js,jsx,ts,tsx}', // Skip test files
    '!src/**/index.{js,jsx,ts,tsx}', // Skip barrel exports
  ],

  // Define how Jest finds test files
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],

  // Ignore certain paths from testing
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
  ],

  // Transform settings for TypeScript/JSX
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },

  // Handle ESM in node_modules if needed
  transformIgnorePatterns: [
    '/node_modules/(?!(your-esm-package|another-esm-lib)/)',
  ],

  // Show detailed results
  verbose: true,
};

// Export for Jest to consume (supports async loading via next/jest)
export default createJestConfig(customJestConfig);
