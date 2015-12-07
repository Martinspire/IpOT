angular.module('ipot').controller('loginController', ['$scope', '$state', function($scope, $state){
    console.log('login');
    $scope.login = function(){
    	$state.go('base.mobile');
    };
}]);