import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    exclude: [
      '**/dist/**',
      '**/node_modules/**',
      '**/__tests__/__fixtures__/**',
      '**/__tests__/utils/**',
    ],
  },
});