'use strict';

window.angular.module('Header', []);

window.angular.module('Header').config(['$translateProvider', ($translateProvider) => {
    $translateProvider.useStaticFilesLoader({
        'prefix': 'locales/lang-',
        'suffix': '.json'
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('pl_PL');
}]);