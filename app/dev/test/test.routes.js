angular.module('ipot').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
    $stateProvider
        .state('base.color', {
            url: '/color',
            templateUrl: 'test/color/color.html',
            controller: 'colorController'
        })
        .state('base.welke', {
            url: '/welke',
            templateUrl: 'test/welke/welke.html',
            controller: 'welkeController'
        });
}]);