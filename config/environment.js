/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'Craft-Cocktails',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    apiHost: 'http://localhost:4741', //deployment step
    // apiHost: 'https://peaceful-cove-48013.herokuapp.com/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    //
    // deployment step
    ENV.baseURL = '/';
    ENV.locationType = 'hash';
    ENV.apiHost = 'https://peaceful-cove-48013.herokuapp.com/';
  }

  return ENV;
};
