'use strict';

window.angular.module('Footer').directive('footer', () => {
    return {
        'restrict': 'A',
        'replace': true,
        'templateUrl': '/views/footer.html',
        'controller': 'footerController'
    };
});