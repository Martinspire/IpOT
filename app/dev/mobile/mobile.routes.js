angular.module('ipot').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
    $stateProvider
        .state('base.start', {
            url: '/',
            templateUrl: 'mobile/start/start.html',
            controller: 'mobileStartController'
        })
        .state('base.aanmelden', {
            url: '/aanmelden',
            templateUrl: 'mobile/aanmelden/aanmelden.html',
            controller: 'aanmeldenController'
        })
        .state('base.advies', {
            url: '/advies',
            templateUrl: 'mobile/advies/advies.html',
            controller: 'adviesController'
        })
        .state('base.contact', {
            url: '/contact',
            templateUrl: 'mobile/contact/contact.html',
            controller: 'contactController'
        })
        .state('base.help', {
            url: '/help',
            templateUrl: 'mobile/help/help.html',
            controller: 'helpController'
        })
        .state('base.instellingen', {
            url: '/instellingen',
            templateUrl: 'mobile/instellingen/instellingen.html',
            controller: 'instellingenController'
        })
        .state('base.profiel', {
            url: '/profiel',
            templateUrl: 'mobile/profiel/profiel.html',
            controller: 'profielController'
        })
        .state('base.stats', {
            url: '/stats',
            templateUrl: 'mobile/stats/stats.html',
            controller: 'statsController'
        })
        .state('base.toilet', {
            url: '/toilet',
            templateUrl: 'mobile/toilet/toilet.html',
            controller: 'toiletController'
        });
}]);