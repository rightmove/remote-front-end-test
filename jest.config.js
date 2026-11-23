module.exports = {
    transform: {
        '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!(rettime|until-async|@open-draft/deferred-promise)/)'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jest-fixed-jsdom',
};
