angular.module('ipot').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
    $stateProvider
        .state('base.start', {
            url: '/start',
            templateUrl: 'features/start/start.html',
            controller: 'startController'
        })
        .state('base.profiel', {
            url: '/profiel',
            templateUrl: 'features/profiel/profiel.html',
            controller: 'profielController'
        })
        .state('base.color', {
            url: '/',
            templateUrl: 'features/color/color.html',
            controller: 'colorController'
        })
        .state('base.test', {
            url: '/test',
            templateUrl: 'features/test/test.html',
            controller: 'testController'
        });
}]);