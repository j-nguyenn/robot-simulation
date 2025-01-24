const nextJest = require('next/jest')
const tsconfig = require('./tsconfig.json')
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  bail: true,
  logHeapUsage: true,
  testTimeout: 120000,
  forceExit: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  moduleNameMapper: {
    ...moduleNameMapper,
    '^lucide-react': require.resolve('lucide-react'),
  },
}

module.exports = createJestConfig(customJestConfig)
