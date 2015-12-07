angular.module('ipot').controller('aanmeldenController', ['$scope', '$state', function($scope, $state){
    console.log('aanmelden');
    $scope.signup = function(){
    	$state.go('base.profiel');
    };
}]);