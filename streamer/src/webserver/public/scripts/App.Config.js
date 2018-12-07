'use strict';

// Global config for frontend
const config = {
    'urls': {
        // project
        'issueTracker': 'https://cam-tech.pl',
        'projectPage': 'https://cam-tech.pl',
        'updatePage': 'https://cam-tech.pl',

        // help
        'embedPlayerHelp': 'https://cam-tech.pl',
        'portForwardingHelp': 'https://cam-tech.pl',
        'rtmpServerHelp': 'https://cam-tech.pl'

    }
};

window.angular.module('app').constant('config', config);
