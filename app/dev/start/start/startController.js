angular.module('ipot').controller('startController', ['$scope', 'dataFactory', function($scope, dataFactory){
    console.log('start');

    $scope.setMode = function(modus){
    	console.log('modus:', modus);
    	dataFactory.setMode(modus);
    };
}]);