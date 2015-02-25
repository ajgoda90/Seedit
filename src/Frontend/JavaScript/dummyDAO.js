/**
 * Created by mike on 2/24/15.
 */
/**
 * Created by mike on 2/21/15.
 */
var dummyDAO = angular.module('dummyDAO',[]);
dummyDAO.factory('api',function(){
    var api = {};
    api.getTrendingTags = function(lowRange, highRange){
        return [
            {"tagName":"dummy1", "frequency":201},
            {"tagName":"dummy2", "frequency":100},
            {"tagName":"dummy3","frequency":25}
        ]
    }
    return api;
});