angular.module('ipot').controller('welkeController', ['$scope', '$http', '$state', '$timeout', function($scope, $http, $state, $timeout){
    console.log('welke');
    $scope.itemText = '';
    $scope.itemClass = 'nothing';
    $scope.autoUpdate = true;

    function getVloeistof(data){
        if(data.value !== undefined && data.value.length > 0){
            var conclusie = data.value[data.value.length -1].Conclusie;

            if(conclusie === undefined || conclusie === '' ){
		        if(data.value[data.value.length -2] !== undefined && data.value[data.value.length -2].Conclusie !== undefined){ 
		        	conclusie = data.value[data.value.length -2];
		        }
		        else if(data.value[data.value.length -3] !== undefined && data.value[data.value.length -3].Conclusie !== undefined){ 
		        	conclusie = data.value[data.value.length -3];
		        }
		    }

            if(conclusie === 'IsKraanWater'){
            	$scope.itemClass = 'water';
				$scope.itemText = 'Kraanwater';
            }
            else if(conclusie === 'IsCola'){
            	$scope.itemClass = 'cola';
                $scope.itemText = 'Cola';
            }
            else if(conclusie === 'IsFanta'){
            	$scope.itemClass = 'sinas';
                $scope.itemText = 'Fanta';
            }
        }
    } 

    function getData(){
        $http.get('http://i-potwebapi.azurewebsites.net/odata/ToiletgangResultaatConclusies/').then(function(result){
            console.log(result);
            if(result !== undefined && result.data !== undefined){
                getVloeistof(result.data);
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
        if (currentState === 'base.welke') {
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