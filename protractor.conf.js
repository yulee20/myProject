
exports.config = {
    directConnect: true,
    allScriptsTimeout: 180 * 1000,
    getPageTimeout: 61 * 1000,
    noColor: false,
    keepAlive: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: 'features/test.feature',
    cucumberOpts: {
        require: ['./step_definitions/', './testSupport/hooks/*.js'],
        tags: '',
        format: 'pretty',
    },
};

