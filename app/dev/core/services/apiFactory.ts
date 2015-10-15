angular.module('ipot.services').factory('apiFactory', function(Azureservice){
    var result = {
        getData : undefined
    };
    
    result.getData = function(){
        Azureservice.getAll('Person').then(function(items) {
            console.log('Query successful');
            return items;
        }, function(err) {
            console.error('Azure Error: ' + err);
            return err;
        });
    }
    
    return result;
});