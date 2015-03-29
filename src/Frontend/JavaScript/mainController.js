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

    $scope.rows = [];
    var row = [];
    for (var i = 0; i < $scope.data.length; i++) {
        row.push($scope.data[i]);

        if ((i+1)%2 == 0) {
            console.log(row);
            $scope.rows.push(row);
            row = [];
        }
    }

    $scope.viewSeed = function() {
        console.log("hello there partner");
    }

}]);