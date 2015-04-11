app.controller("mainController", function($scope,$state, api) {
    ////$scope.alertEM = function(message){alert(message);};
    //console.log('It works!');
    $scope.goToState = function (state, params) {
        $state.go(state, params);
    }

    $scope.overlordData = api.getTopSeeds();

    $scope.search = function() {
        if ($scope.searchStr.toLowerCase() === "toaster") {
            $state.go('main.toasterGrid', {});
        }
    }
});

app.directive('ngEnteredSearch', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnteredSearch);
                });

                event.preventDefault();
            }
        });
    };
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