/**
 * Created by tbell on 3/28/15.
 */
/**
 * Created by tbell on 3/7/15.
 */
app.controller("seedViewController", ['$scope','api', '$stateParams', function($scope, api, $stateParams) {

    this.currentSeed = api.getSeedByID($stateParams.seedID);
    console.log(this.currentSeed);

}]);

