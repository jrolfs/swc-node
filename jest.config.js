module.exports = {
  preset: '@swc-node/jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['<rootDir>/packages/integrate/jest/**/*.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/packages/jest'],
}
