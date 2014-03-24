var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '../../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

console.log(allTestFiles);

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/www/scripts',

  paths: {
      'angular': 'vendor/angular.min',
      'ui-bootstrap': 'vendor/ui-bootstrap-tpls-0.10.0.min',
      'angular-mocks': '../../test/vendor/angular-mocks',
      'chai': '../../test/vendor/chai'
  },
  shim: {
      'angular': {
          exports: 'angular'
      },
      'angular-mocks': {
          deps: ['angular'],
          exports: 'angular.mock'
      },
      'ui-bootstrap': {
          deps: ['angular']
      },
      'chai': {
        exports: 'chai'
      }
  },
  priority: [
      "angular"
  ]
});

require(['chai', 'angular-mocks'], function(chai) {
  window.expect = chai.expect;
  window.assert = chai.assert;

  require(allTestFiles, window.__karma__.start);
});