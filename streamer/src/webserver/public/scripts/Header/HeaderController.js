'use strict';

window.angular.module('Header').controller('headerController',
    ['$scope', '$translate', 'loggerService', ($scope, $translate, loggerService) => {
        $scope.currentLocale = $translate.preferredLanguage();
        $scope.switchLanguage = (locale) => {
            $scope.currentLocale = locale;
            $translate.use(locale).then(
                () => {
                    loggerService.info('Switched language to ' + locale);
                },
                (error) => {
                    loggerService.error('INFO', 'Switching language to ' + locale + ' failed: ' + error);
                });
        };
        $scope.langIs = (locale) => {
            return locale === $scope.currentLocale;
        };
    }]
);
