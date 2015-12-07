angular.module('ipot').controller('dashboardStartController', ['$scope', '$timeout', function($scope, $timeout){
    console.log('dashboard start');

    $scope.mouseoverData = false;

    $scope.steden =[
        {
            highlight: false,
            value: 595,
            color: '#4caf50',
            colorName: 'green',
            name: 'Amsterdam',
            className: 'amsterdam'
        },
        {
            highlight: false,
            value: 31,
            color: '#3598dc',
            colorName: 'blue',
            name: 'Arkel',
            className: 'arkel'
        },
        {
            highlight: false,
            value: 155,
            color: '#ffc107',
            colorName: 'orange',
            name: 'Arnhem',
            className: 'arnhem'
        },
        {
            highlight: false,
            value: 265,
            color: '#8e44ad',
            colorName: 'purple',
            name: 'Delft',
            className: 'delft'
        },
        {
            highlight: false,
            value: 111,
            color: '#ffeb3b',
            colorName: 'yellow',
            name: 'Den Bosch',
            className: 'den-bosch'
        },
        {
            highlight: false,
            value: 92,
            color: '#e7505a',
            colorName: 'red',
            name: 'Den Helder',
            className: 'den-helder'
        },
        {
            highlight: false,
            value: 407,
            color: '#f06292',
            colorName: 'pink',
            name: 'Eindhoven',
            className: 'eindhoven'
        },
        {
            highlight: false,
            value: 249,
            color: '#8f939e',
            colorName: 'grey',
            name: 'Groningen',
            className: 'groningen'
        },
        {
            highlight: false,
            value: 167,
            color: '#3f51b5',
            colorName: 'indigo',
            name: 'Leeuwarden',
            className: 'leeuwarden'
        },
        {
            highlight: false,
            value: 135,
            color: '#dce775',
            colorName: 'lime',
            name: 'Maastricht',
            className: 'maastricht'
        },
        {
            highlight: false,
            value: 386,
            color: '#4dd0e1',
            colorName: 'cyan',
            name: 'Utrecht',
            className: 'utrecht'
        },
        {
            highlight: false,
            value: 65,
            color: '#795548',
            colorName: 'brown',
            name: 'Zwolle',
            className: 'zwolle'
        }
    ];

    $scope.stedenChart = {
        type: 'BarChart',        
        data: {
            cols: [
                {id: 't', label: 'Plaatsnaam', type: 'string'},
                {id: 's', label: 'Gevallen', type: 'number'},
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

    function start(){
        for(var a = 0; a < $scope.steden.length; a++){
            $scope.stedenChart.data.rows.push({c: [
                {v: $scope.steden[a].name},
                {v: $scope.steden[a].value},
                {v: $scope.steden[a].color}
            ]});
            var size = Math.round($scope.steden[a].value / 100);
            $scope.steden[a].size = size;
        }
    }
    start();

}]);