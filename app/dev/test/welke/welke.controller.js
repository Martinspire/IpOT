angular.module('ipot').controller('welkeController', ['$scope', 'Azureservice', function($scope, Azureservice){
    console.log('test');
    $scope.result = '';
    $scope.ophalen = function(){
        Azureservice.getAll('Person').then(function(items) {
            console.log('Query successful', items);
            var result = 'Hoi ' + items[0].firstname + ' ' + items[0].lastname + '!';
            $scope.result = result;
        }, function(err) {
            console.error('Azure Error: ', err);
        
        });
    };
}]);