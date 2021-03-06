angular.module('ipot').controller('colorController', ['$scope', '$http', '$timeout', '$state', function($scope, $http, $timeout, $state){
    
    $scope.myColor = 'white';
    $scope.noColor = true;
    $scope.myColorText = '';
    $scope.autoUpdate = true;
    
    function getKleur(data){
        if(data.value !== undefined && data.value.length > 0){
            var kleur = data.value[data.value.length -1].KleurCode;
            if(kleur !== undefined && kleur !== ''){
                $scope.noColor = false;
                $scope.myColor = kleur;
                $scope.myColorText = ntc.name(kleur)[1];
            }
            else if(data.value[data.value.length -2] !== undefined){ 
                kleur = data.value[data.value.length -2].KleurCode;                
                $scope.noColor = false;
                $scope.myColor = kleur;
                $scope.myColorText = ntc.name(kleur)[1];
            }
            else if(data.value[data.value.length -3] !== undefined){ 
                kleur = data.value[data.value.length -3].KleurCode;                
                $scope.noColor = false;
                $scope.myColor = kleur;
                $scope.myColorText = ntc.name(kleur)[1];
            }
        }
        else{
            console.log('foute data');
        }
    } 
    
    
    function getData(){
        $http.get('http://i-potwebapi.azurewebsites.net/odata/ToiletgangResultaten/').then(function(result){
            console.log(result);
            if(result !== undefined && result.data !== undefined){
                getKleur(result.data);
            }
        }, function(error){
            console.log(error);
        });
    }
    
    getData();
    
    // Function to replicate setInterval using $timeout service.
    $scope.intervalFunction = function() {
        var currentState = $state.current.name;
        //do not run if the MainCtrl is not in scope
        //do not run if we've already got another timeout underway (in case someone jumps back and forth between
        //controllers without waiting 1 second between)
        if (currentState === 'base.color') {
            $timeout(function() {
                if($scope.autoUpdate === true){
                    getData();
                }
                $scope.intervalFunction();
                }, 2000);
        }
    };
    // Kick off the interval
    $scope.intervalFunction();
    
    $scope.update = function(){
        $scope.autoUpdate = true;
    };
    $scope.stop = function(){
        $scope.autoUpdate = false;
    };
    
}]);