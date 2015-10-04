angular.module('ipot').controller('testController', function($scope, apiFactory){
    console.log('test');
    $scope.ophalen = function(){
        var data = apiFactory.getData();
    }
});