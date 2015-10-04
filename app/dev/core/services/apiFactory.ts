angular.module('ipot.services').factory('apiFactory', function(){
    var result = {
        getData : undefined
    };
    
    result.getData = function(){
        return 'hmm'
    }
    
    return result;
});