angular.module('ipot').controller('mobileStartController', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout){
    console.log('start');

    $scope.finished = false;

    var chartGoed = [{
                c: [{
                    v: 'Week 39'
                }, {
                    v: 92
                }, {
                    v: 92
                }, {
                    v: 88
                }]
            }, {
                c: [{
                    v: 'Week 40'
                }, {
                    v: 81
                }, {
                    v: 89
                }, {
                    v: 86
                }]
            }, {
                c: [{
                    v: 'Week 41'
                }, {
                    v: 76
                }, {
                    v: 64
                }, {
                    v: 71
                }]
            }, {
                c: [{
                    v: 'Week 42'
                }, {
                    v: 48
                }, {
                    v: 66
                }, {
                    v: 72
                }]
            }, {
                c: [{
                    v: 'Week 43'
                }, {
                    v: 55
                }, {
                    v: 92
                }, {
                    v: 79
                }]
            }, {
                c: [{
                    v: 'Week 44'
                }, {
                    v: 62
                }, {
                    v: 97
                }, {
                    v: 81
                }]
            }, {
                c: [{
                    v: 'Week 45'
                }, {
                    v: 88
                }, {
                    v: 91
                }, {
                    v: 83
                }]
            }, {
                c: [{
                    v: 'Week 46'
                }, {
                    v: 85
                }, {
                    v: 86
                }, {
                    v: 86
                }]
            }, {
                c: [{
                    v: 'Week 47'
                }, {
                    v: 95
                }, {
                    v: 89
                }, {
                    v: 89
                }]
            }, {
                c: [{
                    v: 'Week 48'
                }, {
                    v: 92
                }, {
                    v: 79
                }, {
                    v: 90
                }]

            }, {
                c: [{
                    v: 'Week 49'
                }, {
                    v: 88
                }, {
                    v: 73
                }, {
                    v: 93
                }]
            }];

    var chartSlecht = [{
                c: [{
                    v: 'Week 39'
                }, {
                    v: 92
                }, {
                    v: 92
                }, {
                    v: 88
                }]
            }, {
                c: [{
                    v: 'Week 40'
                }, {
                    v: 81
                }, {
                    v: 89
                }, {
                    v: 86
                }]
            }, {
                c: [{
                    v: 'Week 41'
                }, {
                    v: 76
                }, {
                    v: 64
                }, {
                    v: 71
                }]
            }, {
                c: [{
                    v: 'Week 42'
                }, {
                    v: 48
                }, {
                    v: 66
                }, {
                    v: 72
                }]
            }, {
                c: [{
                    v: 'Week 43'
                }, {
                    v: 55
                }, {
                    v: 92
                }, {
                    v: 79
                }]
            }, {
                c: [{
                    v: 'Week 44'
                }, {
                    v: 62
                }, {
                    v: 97
                }, {
                    v: 81
                }]
            }, {
                c: [{
                    v: 'Week 45'
                }, {
                    v: 88
                }, {
                    v: 91
                }, {
                    v: 83
                }]
            }, {
                c: [{
                    v: 'Week 46'
                }, {
                    v: 85
                }, {
                    v: 86
                }, {
                    v: 86
                }]
            }, {
                c: [{
                    v: 'Week 47'
                }, {
                    v: 95
                }, {
                    v: 89
                }, {
                    v: 89
                }]
            }, {
                c: [{
                    v: 'Week 48'
                }, {
                    v: 92
                }, {
                    v: 79
                }, {
                    v: 90
                }]

            }, {
                c: [{
                    v: 'Week 49'
                }, {
                    v: 88
                }, {
                    v: 73
                }, {
                    v: 93
                }]
            }];
    
    $scope.chartObject = {
        type : 'LineChart',
        data : {
            cols: [{
                id: 'month',
                label: 'Maand',
                type: 'string'
            }, {
                id: 'gezondheid-id',
                label: 'Gezondheid',
                type: 'number'
            }, {
                id: 'eten-id',
                label: 'Eten',
                type: 'number'
            }, {
                id: 'termijn-id',
                label: 'Lange termijn',
                type: 'number'
            }],
            rows: []
        },
        options : {
            title: 'Lange termijn score',
            vAxis: {
                title: 'Score in %',
                gridlines: {
                    count: 10
                }
            }
        }
    };

    var valuesGoed = {
        health: 88,
        food: 73,
        term: 93
    };
    var valuesSlecht = {
        health: 54,
        food: 57,
        term: 34
    };

    var adviesGoed = 'Er is een toename van vet gedetecteerd. Vandaag dus wat minder vet eten. Overige waardes zijn in orde.';
    var adviesSlecht = 'Je kampt al lange tijd met darmklachten door verkeerde voeding. Eet meer groente en fruit. Ook is meer vezels aan te raden, maar geen noten want daar ben je alergisch voor.';

    $scope.countFrom = 0;

    if($rootScope.user.voornaam === 'Bob'){
        $scope.values = valuesGoed;
        $scope.chartObject.data.rows = chartGoed;
        $scope.advies = adviesGoed;
    }
    else{
        $scope.values = valuesSlecht;
        $scope.chartObject.data.rows = chartSlecht;
        $scope.advies = adviesSlecht;
    }


    $scope.animateAgain = function (points, evt) {
        $scope.finished = false;
        $timeout(function(){
            $scope.finished = true;
        }, 500);
    };

    $scope.icons = function(icon){
        var iconValue = $scope.values[icon];
        if(iconValue > 75){
            return 'good';
        }
        else if(iconValue > 50){
            return 'fine';
        }
        else{
            return 'bad';
        }
    };

    $rootScope.$on('chartRefresh', function(){
        $scope.chartObject.options.forceRedrawNow = true;
    });

    $timeout(function(){
        $scope.finished = true;
    }, 500);
}]);