/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'clover', 'json', 'lcov', ['text', { skipFull: true }]],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.{js,ts}', '!src/**/*.d.ts', '!src/tests/**/*.{js,ts}', '!src/@types/**/*.{js,ts}'],
  coverageProvider: 'v8',
  verbose: true,
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/__tests__/**/*.mjs?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/?(*.)+(spec|test).m[j]s?(x)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist']
}
