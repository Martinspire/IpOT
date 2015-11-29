angular.module('ipot').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
    $stateProvider
        .state('base.login', {
            url: '/login',
            templateUrl: 'login/login/login.html',
            controller: 'loginController'
        })
        .state('base.aanmelden', {
            url: '/aanmelden',
            templateUrl: 'login/aanmelden/aanmelden.html',
            controller: 'aanmeldenController'
        });
}]);