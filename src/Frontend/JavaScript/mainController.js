app.controller("mainController", function($scope,$state) {
    ////$scope.alertEM = function(message){alert(message);};
    //console.log('It works!');
    $scope.goToState = function (state, params) {
        $state.go(state, params);
    }
});

app.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});