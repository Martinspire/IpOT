angular.module('ipot').controller('headerController', ['$scope', '$rootScope', 'dataFactory', function($scope, $rootScope, dataFactory){
    console.log('header');
    $rootScope.modeSwitcher = false;

    $rootScope.toggleModeSwitcher = function(option){
    	if(option !== undefined){
    		$rootScope.modeSwitcher = option;
    	}
    	else{
    		$rootScope.modeSwitcher = !$rootScope.modeSwitcher;
    	}
    };

    $scope.setMode = function(mode){
    	console.log('New Mode & User', mode);
    	dataFactory.setMode(mode);
    };

    $scope.toggleSideMenu = function(){
        $rootScope.toggleSideMenu();
    };

    $rootScope.$on('$stateChangeStart', function(){
        $scope.toggleModeSwitcher(false);
    });
}]);
