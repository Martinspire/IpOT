angular.module('ipot').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
    $stateProvider
        .state('base.start', {
            url: '/',
            templateUrl: 'start/start/start.html',
            controller: 'startController'
        });
}]);