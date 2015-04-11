/**
 * Created by mike on 2/24/15.
 */
app.controller("trendingController", ['$scope', '$state','api', function($scope, $state, api) {
    this.data = api.getTrendingTags(0,100);

    this.showRelatedIdeas = function(tagName) {
        console.log(tagName);
        if (tagName === "toasters") {
            $state.go('main.toasterGrid',{});
        }
    }
}]);