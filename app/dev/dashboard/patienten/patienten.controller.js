angular.module('ipot').controller('patientenController', ['$scope', function($scope){
    console.log('patienten');
    
    var users = [
        [88, 81, 76, 72, 79, 81, 83, 86, 85, 79, 83, 95],
        [88, 81, 76, 72, 79, 81, 83, 86, 85, 79, 83, 95],
        [88, 81, 76, 72, 79, 81, 83, 86, 85, 79, 83, 95],
        [88, 81, 76, 72, 79, 81, 83, 86, 85, 79, 83, 95],
        [88, 81, 76, 72, 79, 81, 83, 86, 85, 79, 83, 95],
        [88, 81, 76, 72, 79, 81, 83, 86, 85, 79, 83, 95]
    ];

    var weken = ['Week 39', 'Week 40', 'Week 41', 'Week 42', 'Week 43', 'Week 44', 'Week 45', 'Week 46', 'Week 47', 'Week 48', 'Week 49'];

    var userGraph = {
        type: 'AreaChart', 
        options: {
            backgroundColor: { fill:'transparent' },
            displayExactValues: true,
            vAxis: {
              title: '',
              gridlines: {
                count: '4'
              }
            },
            legend: { position: 'none'}
        },      
        data: {
            cols: [
                {id: 't', label: 'Trend', type: 'string'},
                {id: 's', label: 'Gevallen', type: 'number'}
            ],
            rows: []
        }
    };

    for (var a = 0; a < users.length; a++){
        var graph = angular.copy(userGraph);
        for (var b = 0; b < weken.length; b++){
            console.log(users, a, b, users[a][b]);
            graph.data.rows.push({
                c: [
                    {
                        v: weken[b]
                    }, {
                        v: users[a][b]
                    }
                ]
            });
        }
        $scope['userGraph' + (a + 1)] = graph;
        console.log($scope['userGraph' + (a + 1)]);
    }
}]);