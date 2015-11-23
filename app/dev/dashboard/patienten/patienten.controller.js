angular.module('ipot').controller('patientenController', ['$scope', function($scope){
    console.log('patienten');
    
    $scope.labels = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'July'];
    $scope.series = ['Kleur', 'Ph waarde'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
        ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
}]);