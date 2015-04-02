/**
 * Created by Andrew on 3/5/2015.
 */
app.controller('gridController',['$scope', 'api',function($scope,api){

    $scope.data = api.getTopSeeds(0,0);
    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'];

}]);

app.controller('gridController_Trending',['$scope', 'api',function($scope,api){

    $scope.data = api.getTrendingSeeds(0,10);

}]);