requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'angular': 'vendor/angular.min',
        'ui-bootstrap': 'vendor/ui-bootstrap-tpls-0.10.0.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui-bootstrap': {
            deps: ['angular']
        }
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

// Init with vendor js (angular and ui-bootstrap) and the actual app
define(['angular', 'ui-bootstrap', 'got/app'], function(angular, bootstrap, app) {
    'use strict';

    console.log("lol");
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });

    // You can read about Angular here: http://angularjs.org/
    // You can read about Angular UI bootstrap here: http://angular-ui.github.io/bootstrap/

    // The app is at www/scripts/got/app.js
});