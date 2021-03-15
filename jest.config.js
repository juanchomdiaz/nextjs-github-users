module.exports = {
    setupFiles: ['<rootDir>/src/tests/setupTest.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "identity-obj-proxy"
    }
}