exports.config = {
    allScriptsTimeout: 21000,

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,

    baseUrl: 'http://localhost:8000',

    framework: 'mocha',

    mochaOpts: {
        enableTimeouts: false
    }
};
