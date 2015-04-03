/**
 * Created by mike on 2/24/15.
 */
app.controller("trendingController", ['$scope','api', function($scope, api) {
    this.data = api.getTrendingTags(0,100);
}]);