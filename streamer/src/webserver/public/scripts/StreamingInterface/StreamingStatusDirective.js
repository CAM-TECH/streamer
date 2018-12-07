'use strict';

window.angular.module('StreamingInterface').directive('streamingStatus', () => {
    return {
        'scope': {
            'data': '=',
            'name': '@name'
        },
        'restrict': 'E',
        'replace': true,
        'templateUrl': '/views/status.html',
        'controller': 'streamingStatusController'
    };
});