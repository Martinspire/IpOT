angular.module('ipot').controller('welkeController', ['$scope', function($scope){
    console.log('welke');
    $scope.itemText = '';
    $scope.itemClass = 'nothing';



    $scope.autoUpdate = false;
    $scope.update = function(){

    };
    $scope.stop = function(){

    };
}]);