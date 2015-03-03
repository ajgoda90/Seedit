app.controller("mainController", function($scope,$state) {
    ////$scope.alertEM = function(message){alert(message);};
    //console.log('It works!');
    $scope.goToState = function (state, params) {
        $state.go(state, params);
    }
});

app.controller('seedController', ['$scope', 'api', function($scope, api) {

    $scope.message = 'test';

    $scope.data = api.getTopSeeds(0,0);

}]);