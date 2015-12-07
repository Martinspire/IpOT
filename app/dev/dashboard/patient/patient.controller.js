angular.module('ipot').controller('patientController', ['$scope', function($scope){
    console.log('patient');

    $scope.trend = {
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
            rows: [{
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
            }]
        },
        options : {
            title: '',
            vAxis: {
                title: 'Score in %',
                gridlines: {
                    count: 10
                }
            }
        }
    };


    $scope.fouten = {
        type : 'PieChart',
        data : {
            cols: [
                {id: 't', label: 'Negatieve invloed', type: 'string'},
                {id: 's', label: 'Kans in procent', type: 'number'}],
            rows: [{
                c: [{
                    v: 'Vet eten'
                }, {
                    v: 16
                }]
            }, {
                c: [{
                    v: 'Teveel zout'
                }, {
                    v: 7
                }]
            }, {
                c: [{
                    v: 'Vitaminetekort'
                }, {
                    v: 5
                }]
            }, {
                c: [{
                    v: 'Tekort aan ijzer'
                }, {
                    v: 2
                }]
            }, {
                c: [{
                    v: 'Overig'
                }, {
                    v: 3
                }]
            }]
        },
        options : {
            title: ''
        }
    };


    $scope.adviezen = {
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
            rows: [{
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
            }]
        },
        options : {
            title: '',
            vAxis: {
                title: 'Score in %',
                gridlines: {
                    count: 10
                }
            }
        }
    };


    $scope.ziektes = {
        type : 'BarChart',
        data : {
            cols: [{
                id: 'ziekte',
                label: 'Aandoening',
                type: 'string'
            }, {
                id: 'kans',
                label: 'Huidige kans',
                type: 'number'
            }, {
                id: 'kans',
                label: 'Vorige kans (1 jaar geleden)',
                type: 'number'
            }],
            rows: [{
                c: [{
                    v: 'Nierstenen binnen 25 jaar'
                }, {
                    v: 6.01
                }, {
                    v: 5.56
                }]
            }, {
                c: [{
                    v: 'Hartaanval binnen 40 jaar'
                }, {
                    v: 4.96
                }, {
                    v: 7.22
                }]
            }, {
                c: [{
                    v: 'Huidafwijkingen'
                }, {
                    v: 3.67
                }, {
                    v: 4.01
                }]
            }, {
                c: [{
                    v: 'Diabetes binnen 20 jaar'
                }, {
                    v: 3.12
                }, {
                    v: 4.95
                }]
            }, {
                c: [{
                    v: 'Ziekte in de longen'
                }, {
                    v: 3.04
                }, {
                    v: 2.93
                }]
            }, {
                c: [{
                    v: 'Hartaanval binnen 10 jaar'
                }, {
                    v: 2.91
                }, {
                    v: 9.32
                }]
            }, {
                c: [{
                    v: 'Herseninfarct'
                }, {
                    v: 2.77
                }, {
                    v: 2.70
                }]
            }]
        },
        options : {
            title: '',
            chartArea : { left : 250 },
            vAxis: {
                title: 'Waarschijnlijkheid in %',
                gridlines: {
                    count: 10
                }
            },
            legend: {
                position: 'bottom',
                alignment: 'start'
            }
        }
    };

}]);