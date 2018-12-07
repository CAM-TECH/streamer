'use strict';

window.angular.module('Header').directive('header', () => {
    return {
        'restrict': 'A',
        'replace': true,
        'templateUrl': '/views/header.html',
        'controller': 'headerController'
    };
});