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
            {"tagName":"cooking", "frequency":201, "hyperlink":"www.google.com"},
            {"tagName":"video games", "frequency":100, "hyperlink":"www.google.com"},
            {"tagName":"basketball","frequency":25, "hyperlink":"www.google.com"},
            {"tagName":"baseball","frequency":23, "hyperlink":"www.google.com"},
            {"tagName":"football","frequency":22, "hyperlink":"www.google.com"},
            {"tagName":"hockey","frequency":21, "hyperlink":"www.google.com"},
            {"tagName":"cricket","frequency":20, "hyperlink":"www.google.com"},
            {"tagName":"swimming","frequency":19, "hyperlink":"www.google.com"}
        ]
    }
    return api;
});