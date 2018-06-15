module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testMatch: ['<rootDir>/test/unit/specs/**/*.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.tsx',
    '<rootDir>/src/containers/**/*.tsx',
    '<rootDir>/src/modules/**/*.ts',
    '<rootDir>/src/sagas/**/*.ts'
  ],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true
}
