angular.module('ipot').config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('base', {
            abstract: true,
            views: {
                content: {
                    templateUrl: 'core/structure/layout/layout.html',
                    controller: 'layoutController'
                },
                navigation: {
                    templateUrl: 'core/structure/navigation/navigation.html',
                    controller: 'navigationController'
                },
                header: {
                    templateUrl: 'core/structure/header/header.html',
                    controller: 'headerController'
                },
                footer: {
                    templateUrl: 'core/structure/footer/footer.html',
                    controller: 'footerController'
                }
            }
        })        
        .state('error', {
            url: 'error',
            templateUrl: 'core/error/error.html',
            controller: 'errorController'
        })
        .state('loading', {
            url: 'loading',
            templateUrl: 'core/loading/loading.html'
        })
});