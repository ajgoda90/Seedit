/**
 * Created by tbell on 3/7/15.
 */
app.controller("newIdeaController", ['$scope','api', function($scope, api) {


}]);

app.directive('fallbackSrc', function () {
    var fallbackSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function() {
                angular.element(this).attr("src", iAttrs.fallbackSrc);
            });
        }
    }
    return fallbackSrc;
});