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

    $scope.toggleMobile = function(){
        $rootScope.mode.mobile = !$rootScope.mode.mobile;
        $rootScope.$broadcast('chartRefresh');
        $rootScope.toggleModeSwitcher(false);
    };

    $rootScope.$on('$stateChangeStart', function(){
        $scope.toggleModeSwitcher(false);
    });
}]);
