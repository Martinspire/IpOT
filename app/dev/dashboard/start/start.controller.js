angular.module('ipot').controller('dashboardStartController', ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout){
    console.log('dashboard start');

    $scope.mouseoverData = false;

    $scope.steden =[
        {
            highlight: false,
            value: 59,
            color: '#4caf50',
            colorName: 'green',
            name: 'Amsterdam',
            className: 'amsterdam'
        },
        {
            highlight: false,
            value: 3,
            color: '#3598dc',
            colorName: 'blue',
            name: 'Arkel',
            className: 'arkel'
        },
        {
            highlight: false,
            value: 15,
            color: '#ffc107',
            colorName: 'orange',
            name: 'Arnhem',
            className: 'arnhem'
        },
        {
            highlight: false,
            value: 26,
            color: '#8e44ad',
            colorName: 'purple',
            name: 'Delft',
            className: 'delft'
        },
        {
            highlight: false,
            value: 11,
            color: '#ffeb3b',
            colorName: 'yellow',
            name: 'Den Bosch',
            className: 'den-bosch'
        },
        {
            highlight: false,
            value: 9,
            color: '#e7505a',
            colorName: 'red',
            name: 'Den Helder',
            className: 'den-helder'
        },
        {
            highlight: false,
            value: 40,
            color: '#f06292',
            colorName: 'pink',
            name: 'Eindhoven',
            className: 'eindhoven'
        },
        {
            highlight: false,
            value: 24,
            color: '#8f939e',
            colorName: 'grey',
            name: 'Groningen',
            className: 'groningen'
        },
        {
            highlight: false,
            value: 16,
            color: '#3f51b5',
            colorName: 'indigo',
            name: 'Leeuwarden',
            className: 'leeuwarden'
        },
        {
            highlight: false,
            value: 13,
            color: '#dce775',
            colorName: 'lime',
            name: 'Maastricht',
            className: 'maastricht'
        },
        {
            highlight: false,
            value: 38,
            color: '#4dd0e1',
            colorName: 'cyan',
            name: 'Utrecht',
            className: 'utrecht'
        },
        {
            highlight: false,
            value: 6,
            color: '#795548',
            colorName: 'brown',
            name: 'Zwolle',
            className: 'zwolle'
        }
    ];

    $scope.stedenChart = {
        type: 'BarChart', 
        options: {
            legend: {
                position: 'none'
            }
        },
        data: {
            cols: [
                {id: 't', label: 'Plaatsnaam', type: 'string'},
                {id: 's', label: 'Patienten', type: 'number'},
                {role: 'style', type: 'string'}
            ],
            rows: []
        }
    };

    
    $scope.animateAgain = function (points, evt) {
        $scope.finished = false;
        $timeout(function(){
            $scope.finished = true;
        }, 500);
    };

    $timeout(function(){
        $scope.finished = true;
    }, 500);

    function highlight(item){
        for(var a = 0; a < $scope.steden.length; a++){
            if(a === item){
                $scope.steden[a].highlight = true;
            }
            else{
                $scope.steden[a].highlight = false;
            }
        }
    }

    $scope.mouseover = function(status){
        $scope.mouseoverData = status;
        if(status === false){
            highlight();
        }
    };

    $scope.mouseoverHandler = function(row, column){
        if($scope.mouseoverData === true){
            highlight(row);
        }
    };
    $scope.selectHandler = function(selectedItem){
        highlight(selectedItem.row);
    };


    $rootScope.$on('chartRefresh', function(){
        $scope.stedenChart.options.forceRedrawNow = true;
    });

    function start(){
        for(var a = 0; a < $scope.steden.length; a++){
            $scope.stedenChart.data.rows.push({c: [
                {v: $scope.steden[a].name},
                {v: $scope.steden[a].value},
                {v: $scope.steden[a].color}
            ]});
            var size = Math.round($scope.steden[a].value / 10);
            $scope.steden[a].size = size;
        }
    }
    start();

}]);