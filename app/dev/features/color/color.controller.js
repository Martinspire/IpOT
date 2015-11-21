angular.module('ipot').controller('colorController', ['$scope', '$http', '$timeout', '$state', function($scope, $http, $timeout, $state){
    
    $scope.myColor = 'white';
    $scope.noColor = true;
    $scope.myColorText = '';
    $scope.autoUpdate = true;
    
    var dummyData = {
        'odata.metadata':'http://i-potwebapi.azurewebsites.net/odata/$metadata#ToiletgangResultaten',
        'value':[
            {
                'Id':'38ce38b1-eb6a-4de9-9897-3113a0597658','KleurOmschrijving':'a94ac401','KleurCode':'#4AC401','Afwijkend':false
            },{
                'Id':'18a44071-5f6f-4cc0-9189-431ba303b1d8','KleurOmschrijving':'4f932a2c','KleurCode':'#932A2C','Afwijkend':false
            },{
                'Id':'f6a9490a-99a4-450f-af8c-f13f28ada02f','KleurOmschrijving':'213eb96','KleurCode':'#13EB96','Afwijkend':false
            }
        ]
    };  
    
    function getKleur(data){
        if(data.value !== undefined && data.value.length > 0){
            var kleur = data.value[data.value.length -1].KleurCode;
            if(kleur !== undefined && kleur !== ''){
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
        $http.get('http://i-potwebapi.azurewebsites.net/odata/ToiletgangResultaten/').then(function(data){
            console.log(data);
            if(data !== undefined && data.data !== undefined){
                getKleur(data.data);
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