angular.module('ipot').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
    $stateProvider
        .state('base.dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/start/start.html',
            controller: 'dashboardStartController'
        })
        .state('base.patienten', {
            url: '/patienten',
            templateUrl: 'dashboard/patienten/patienten.html',
            controller: 'patientenController'
        })
        .state('base.patient', {
            url: '/patient',
            templateUrl: 'dashboard/patient/patient.html',
            controller: 'patientController'
        });
}]);