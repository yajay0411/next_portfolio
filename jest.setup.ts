/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

import '@testing-library/jest-dom';
import type { NextRouter } from 'next/router';

/**
 * Helper to create a typed jest mock function.
 * Casting through `unknown` resolves TS type mismatch.
 */
const createMockFn = <T extends (...args: unknown[]) => unknown>(
  implementation?: T,
) => jest.fn(implementation) as unknown as jest.MockedFunction<T>;

/**
 * Default mocked NextRouter for tests.
 * You can override properties in individual tests if needed.
 */
export const mockNextRouter: Partial<NextRouter> = {
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  push: createMockFn(async () => true),
  replace: createMockFn(async () => true),
  reload: createMockFn(),
  back: createMockFn(),
  prefetch: createMockFn(() => Promise.resolve()),
  beforePopState: createMockFn(),
  events: {
    on: createMockFn(),
    off: createMockFn(),
    emit: createMockFn(),
  },
  isFallback: false,
};

// Mock next/router for Pages Router (pre-Next.js 13 App Router)
jest.mock('next/router', () => ({
  useRouter: () => mockNextRouter,
}));

// Mock next/navigation for App Router (Next.js 13+)
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: createMockFn(),
    replace: createMockFn(),
    prefetch: createMockFn(),
    back: createMockFn(),
    forward: createMockFn(),
    refresh: createMockFn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}));

/**
 * Fail tests if `console.error` is triggered.
 * Helps catch unexpected runtime issues in components.
 */
const originalError = console.error;
console.error = (...args: unknown[]) => {
  originalError(...args);
  throw new Error(`Unexpected console.error: ${args.join(' ')}`);
};

export {};
